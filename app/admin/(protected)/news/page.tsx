import { readNews } from "@/lib/news";
import Link from "next/link";
import Image from "next/image";
import { AddNewsForm } from "./AddNewsForm";
import { DeleteNewsButton } from "./DeleteNewsButton";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function AdminNewsPage() {
  const items = readNews();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-secondary">News Articles</h1>
        <span className="badge badge-primary text-white font-bold px-3 py-3">
          {items.length} total
        </span>
      </div>

      {/* ── Add form ── */}
      <AddNewsForm />

      {/* ── Article list ── */}
      {items.length === 0 ? (
        <p className="text-base-content/40 text-center py-10">
          No articles yet. Add one above.
        </p>
      ) : (
        <div className="space-y-4">
          <h2 className="font-bold text-secondary text-lg">Existing Articles</h2>
          {items.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 border border-base-300 shadow-sm"
            >
              <div className="card-body flex-row items-start gap-4 py-4 px-5">
                {/* Thumbnail */}
                {item.image && (
                  <div className="relative shrink-0 w-20 h-14 rounded overflow-hidden">
                    <Image
                      src={`/news-images/${item.image}`}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-secondary truncate">{item.title}</p>
                  <p className="text-sm text-base-content/50">
                    {formatDate(item.date)}
                  </p>
                  <p className="text-sm text-base-content/60 mt-1 line-clamp-2">
                    {item.body.slice(0, 120)}...
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 shrink-0">
                  <Link
                    href={`/admin/news/${item.id}`}
                    className="btn btn-sm btn-outline btn-secondary"
                  >
                    Edit
                  </Link>
                  <DeleteNewsButton id={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
