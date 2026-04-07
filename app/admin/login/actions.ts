"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string } | null> {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/admin",
    });
  } catch (err) {
    // AuthError = wrong credentials
    if (err instanceof AuthError) {
      return { error: "Invalid username or password." };
    }
    // NEXT_REDIRECT is not an AuthError — re-throw so Next.js handles it
    throw err;
  }
  return null;
}
