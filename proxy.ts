import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Read the Auth.js JWT directly from the cookie — no redirect side-effects.
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/admin/login";

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET!,
  }).catch(() => null);

  const isLoggedIn = !!token;

  // Unauthenticated → go to login
  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Already logged in but visiting login page → go to dashboard
  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Do NOT include /admin/login — it must stay accessible for unauthenticated users
  matcher: ["/admin", "/admin/news/:path*", "/admin/gallery/:path*"],
};
