"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { readNews, writeNews } from "@/lib/news";
import { auth } from "@/lib/auth";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

// ── Add ───────────────────────────────────────────────────────────────────────
export async function addNewsAction(
  _prev: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string } | null> {
  await requireAdmin();

  const title = (formData.get("title") as string)?.trim();
  const date = formData.get("date") as string;
  const body = (formData.get("body") as string)?.trim();
  const imageFile = formData.get("image") as File | null;

  if (!title || !date || !body)
    return { error: "Title, date, and body are required." };

  // Save image if provided
  let imageFilename = "";
  if (imageFile && imageFile.size > 0) {
    const ext = path.extname(imageFile.name).toLowerCase();
    const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
    if (!allowed.has(ext)) return { error: "Image must be JPG, PNG, or WebP." };
    const safeName = `${Date.now()}-${imageFile.name
      .replace(/[^a-z0-9.-]/gi, "_")
      .toLowerCase()}`;
    const dest = path.join(process.cwd(), "public", "news-images", safeName);
    await fs.writeFile(dest, Buffer.from(await imageFile.arrayBuffer()));
    imageFilename = safeName;
  }

  const id = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);

  const items = readNews();
  const uniqueId = items.some((n) => n.id === id) ? `${id}-${Date.now()}` : id;

  items.unshift({ id: uniqueId, title, date, image: imageFilename, body });
  writeNews(items);
  revalidatePath("/news");
  revalidatePath("/admin/news");
  return null;
}

// ── Delete ────────────────────────────────────────────────────────────────────
export async function deleteNewsAction(
  _prev: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string } | null> {
  await requireAdmin();
  const id = formData.get("id") as string;
  const items = readNews().filter((n) => n.id !== id);
  writeNews(items);
  revalidatePath("/news");
  revalidatePath("/admin/news");
  return null;
}

// ── Edit (save) ───────────────────────────────────────────────────────────────
export async function editNewsAction(
  _prev: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string } | null> {
  await requireAdmin();

  const id = formData.get("id") as string;
  const title = (formData.get("title") as string)?.trim();
  const date = formData.get("date") as string;
  const body = (formData.get("body") as string)?.trim();
  const imageFile = formData.get("image") as File | null;
  const keepImage = formData.get("keepImage") as string;

  if (!title || !date || !body)
    return { error: "Title, date, and body are required." };

  let imageFilename = keepImage ?? "";
  if (imageFile && imageFile.size > 0) {
    const ext = path.extname(imageFile.name).toLowerCase();
    const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
    if (!allowed.has(ext)) return { error: "Image must be JPG, PNG, or WebP." };
    const safeName = `${Date.now()}-${imageFile.name
      .replace(/[^a-z0-9.-]/gi, "_")
      .toLowerCase()}`;
    const dest = path.join(process.cwd(), "public", "news-images", safeName);
    await fs.writeFile(dest, Buffer.from(await imageFile.arrayBuffer()));
    imageFilename = safeName;
  }

  const items = readNews().map((n) =>
    n.id === id ? { ...n, title, date, body, image: imageFilename } : n
  );
  writeNews(items);
  revalidatePath("/news");
  revalidatePath("/admin/news");
  return null;
}
