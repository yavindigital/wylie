import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logoutAction } from "./actions";

// All routes inside (protected)/ require a valid session.
// The route group keeps the URL unchanged: /admin, /admin/news, /admin/gallery.
export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Top bar */}
      <header className="bg-secondary text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-6">
          <span className="font-extrabold text-primary tracking-wide uppercase text-sm">
            ⚙ Admin Panel
          </span>
          <nav className="hidden sm:flex items-center gap-4 text-sm font-semibold text-white/80">
            <Link href="/admin" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/news" className="hover:text-white transition-colors">
              News
            </Link>
            <Link href="/admin/gallery" className="hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/admin/settings" className="hover:text-white transition-colors">
              Settings
            </Link>
            <Link href="/" target="_blank" className="hover:text-white transition-colors">
              View Site ↗
            </Link>
          </nav>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="btn btn-ghost btn-sm text-white/70 hover:text-white hover:bg-white/10"
          >
            Sign Out
          </button>
        </form>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}
