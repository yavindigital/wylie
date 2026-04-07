"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import {
  addUser,
  updateUserPassword,
  updateUserEmail,
  deleteUser,
} from "@/lib/users";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

// ── Add user ─────────────────────────────────────────────────────────────────
export async function addUserAction(
  _prev: { error?: string; success?: string } | null,
  formData: FormData
): Promise<{ error?: string; success?: string } | null> {
  await requireAdmin();

  const username = (formData.get("username") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;
  const confirm = formData.get("confirm") as string;

  if (!username || !email || !password) return { error: "All fields are required." };
  if (password !== confirm) return { error: "Passwords do not match." };
  if (password.length < 8) return { error: "Password must be at least 8 characters." };

  try {
    addUser({ username, email, password });
    revalidatePath("/admin/settings");
    return { success: `User "${username}" created.` };
  } catch (err) {
    return { error: (err as Error).message };
  }
}

// ── Change password ───────────────────────────────────────────────────────────
export async function changePasswordAction(
  _prev: { error?: string; success?: string } | null,
  formData: FormData
): Promise<{ error?: string; success?: string } | null> {
  await requireAdmin();

  const id = formData.get("id") as string;
  const password = formData.get("password") as string;
  const confirm = formData.get("confirm") as string;

  if (!password) return { error: "Password is required." };
  if (password !== confirm) return { error: "Passwords do not match." };
  if (password.length < 8) return { error: "Password must be at least 8 characters." };

  try {
    updateUserPassword(id, password);
    revalidatePath("/admin/settings");
    return { success: "Password updated." };
  } catch (err) {
    return { error: (err as Error).message };
  }
}

// ── Update email ──────────────────────────────────────────────────────────────
export async function updateEmailAction(
  _prev: { error?: string; success?: string } | null,
  formData: FormData
): Promise<{ error?: string; success?: string } | null> {
  await requireAdmin();

  const id = formData.get("id") as string;
  const email = (formData.get("email") as string)?.trim();

  if (!email) return { error: "Email is required." };

  try {
    updateUserEmail(id, email);
    revalidatePath("/admin/settings");
    return { success: "Email updated." };
  } catch (err) {
    return { error: (err as Error).message };
  }
}

// ── Delete user ───────────────────────────────────────────────────────────────
export async function deleteUserAction(
  _prev: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string } | null> {
  await requireAdmin();

  const id = formData.get("id") as string;

  try {
    deleteUser(id);
    revalidatePath("/admin/settings");
    return null;
  } catch (err) {
    return { error: (err as Error).message };
  }
}
