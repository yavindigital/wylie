import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

// Always read fresh — add a new entry to content/news.json and it appears
// on next page load without a rebuild.
export const dynamic = "force-dynamic";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image?: string;
  sourceUrl?: string;
  body: string;
}

function getNews(): NewsItem[] {
  const file = path.join(process.cwd(), "content", "news.json");
  try {
    const raw = fs.readFileSync(file, "utf-8");
    const items: NewsItem[] = JSON.parse(raw);
    // Newest first
    return items.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function NewsPage() {
  const items = getNews();

  return (
    <main className="bg-base-100 min-h-screen">
      {/* Header */}
      <section className="bg-secondary text-white py-14 text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
          Stay Informed
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold">Campaign News</h1>
        <p className="mt-3 text-white/70 max-w-xl mx-auto text-base">
          The latest updates from David Wylie&apos;s campaign for Denton County Commissioner, Precinct 4.
        </p>
      </section>

      {/* News feed */}
      <section className="max-w-4xl mx-auto px-4 py-14 space-y-10">
        {items.length === 0 && (
          <div className="text-center py-20 text-base-content/40">
            <p className="text-5xl mb-4">📰</p>
            <p className="text-xl font-semibold">No news yet.</p>
            <p className="text-sm mt-2">
              Add entries to{" "}
              <code className="bg-base-300 px-1 rounded">content/news.json</code> to
              get started.
            </p>
          </div>
        )}

        {items.map((item) => (
          <article
            key={item.id}
            className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden"
          >
            {/* Photo */}
            {item.image && (
              <div className="relative w-full h-72">
                {item.sourceUrl ? (
                  <Link href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <Image
                      src={item.image.startsWith("http") ? item.image : `/news-images/${item.image}`}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 896px"
                      className="object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>
                ) : (
                  <Image
                    src={item.image.startsWith("http") ? item.image : `/news-images/${item.image}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                  />
                )}
              </div>
            )}

            <div className="card-body gap-4 p-8">
              {/* Meta */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="badge badge-primary text-white font-bold text-xs uppercase tracking-wider px-3 py-2">
                  News
                </span>
                <time
                  dateTime={item.date}
                  className="text-base-content/50 text-sm font-medium"
                >
                  {formatDate(item.date)}
                </time>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary leading-snug">
                {item.title}
              </h2>

              {/* Body */}
              <div className="text-base-content/80 leading-relaxed space-y-3">
                {item.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Source link */}
              {item.sourceUrl && (
                <Link
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline mt-2"
                >
                  Read full story at Cross Timbers Gazette ↗
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-base-200 py-14 text-center">
        <h2 className="text-2xl font-extrabold text-secondary mb-4">
          Want to stay up to date?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/volunteer" className="btn btn-primary text-white font-bold px-8">
            Join the Campaign
          </Link>
          <Link href="/donate" className="btn btn-outline btn-secondary font-bold px-8">
            Donate Now
          </Link>
        </div>
      </section>
    </main>
  );
}
