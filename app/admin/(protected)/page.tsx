import { auth } from "@/lib/auth";
import { readNews } from "@/lib/news";
import fs from "fs";
import path from "path";
import Link from "next/link";

function getGalleryCount() {
  const dir = path.join(process.cwd(), "public", "gallery");
  const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => exts.has(path.extname(f).toLowerCase())).length;
  } catch {
    return 0;
  }
}

export default async function AdminDashboard() {
  const session = await auth();
  const newsCount = readNews().length;
  const galleryCount = getGalleryCount();

  const cards = [
    {
      href: "/admin/news",
      icon: "📰",
      title: "News",
      stat: `${newsCount} article${newsCount !== 1 ? "s" : ""}`,
      cta: "Add / Edit News",
      color: "border-primary",
    },
    {
      href: "/admin/gallery",
      icon: "📷",
      title: "Gallery",
      stat: `${galleryCount} photo${galleryCount !== 1 ? "s" : ""}`,
      cta: "Upload / Manage Photos",
      color: "border-secondary",
    },
    {
      href: "/admin/settings",
      icon: "⚙️",
      title: "Settings",
      stat: "Users & Passwords",
      cta: "Manage Admin Users",
      color: "border-accent",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-extrabold text-secondary">
          Welcome back, {session?.user?.name ?? "Admin"} 👋
        </h1>
        <p className="text-base-content/50 mt-1">
          Manage campaign content from this dashboard.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`card bg-base-100 border-l-4 ${c.color} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="card-body flex-row items-center gap-6">
              <span className="text-5xl">{c.icon}</span>
              <div>
                <p className="text-2xl font-extrabold text-secondary">
                  {c.stat}
                </p>
                <p className="text-base-content/50 text-sm">{c.title}</p>
                <p className="text-primary font-semibold text-sm mt-1">
                  {c.cta} →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick tips */}
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body gap-3">
          <h2 className="font-extrabold text-secondary text-lg">Quick Guide</h2>
          <ul className="text-sm text-base-content/70 space-y-2">
            <li>
              📰 <strong>News:</strong> Add articles with an optional photo.
              Edit or delete existing ones.
            </li>
            <li>
              📷 <strong>Gallery:</strong> Upload photos (JPG, PNG, WebP).
              They appear on the public gallery page immediately.
            </li>
            <li>
              ⚙️ <strong>Settings:</strong> Add admin users, update email
              addresses, and change passwords.
            </li>
            <li>
              🌐 Use{" "}
              <strong>
                <Link href="/" target="_blank" className="underline">
                  View Site ↗
                </Link>
              </strong>{" "}
              in the top bar to preview changes live.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
