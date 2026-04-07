"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const ALLOWED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

// ── Upload one or more photos ─────────────────────────────────────────────────
export async function uploadPhotosAction(
  _prev: { error?: string; uploaded?: number } | null,
  formData: FormData
): Promise<{ error?: string; uploaded?: number } | null> {
  await requireAdmin();

  const files = formData.getAll("photos") as File[];
  if (!files.length || files[0].size === 0)
    return { error: "Please select at least one photo." };

  let uploaded = 0;
  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTS.has(ext)) continue;

    const safeName = `${Date.now()}-${uploaded}-${file.name
      .replace(/[^a-z0-9.-]/gi, "_")
      .toLowerCase()}`;
    const dest = path.join(GALLERY_DIR, safeName);
    await fs.writeFile(dest, Buffer.from(await file.arrayBuffer()));
    uploaded++;
  }

  if (uploaded === 0) return { error: "No valid image files found." };

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  return { uploaded };
}

// ── Delete a photo ────────────────────────────────────────────────────────────
export async function deletePhotoAction(
  _prev: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string } | null> {
  await requireAdmin();

  const filename = formData.get("filename") as string;
  // Security: strip any path components — only allow files inside gallery dir
  const safe = path.basename(filename);
  if (!ALLOWED_EXTS.has(path.extname(safe).toLowerCase()))
    return { error: "Invalid file." };

  await fs.unlink(path.join(GALLERY_DIR, safe)).catch(() => null);

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  return null;
}
