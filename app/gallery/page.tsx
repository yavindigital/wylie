import fs from "fs";
import path from "path";
import PhotoGallery from "@/components/PhotoGallery";

// Always read the folder fresh — no build-time caching.
// Drop a new photo in public/gallery/ and it appears on next page load.
export const dynamic = "force-dynamic";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]);

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="bg-base-100 min-h-screen">
      {/* Header */}
      <section className="bg-secondary text-white py-14 text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
          Precinct 4 · David Wylie for Commissioner
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold">Photo Gallery</h1>
        <p className="mt-3 text-white/70 max-w-xl mx-auto text-base">
          Photos from community events, town halls, and campaign activities across Southwest Denton County.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <PhotoGallery images={images} />
      </section>

      {/* How to add photos — visible only in dev (hidden in prod via CSS) */}
      {images.length === 0 && (
        <section className="max-w-2xl mx-auto px-4 pb-16 text-center">
          <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
            <h2 className="text-xl font-bold text-secondary mb-3">Adding Photos</h2>
            <p className="text-base-content/70 text-sm leading-relaxed">
              Copy any <strong>.jpg</strong>, <strong>.png</strong>, or <strong>.webp</strong> image file
              into the <code className="bg-base-300 px-1.5 py-0.5 rounded font-mono text-xs">public/gallery/</code> folder.
              They will appear here automatically on the next page load — no code changes needed.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
