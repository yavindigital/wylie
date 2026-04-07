import fs from "fs";
import path from "path";
import Image from "next/image";
import { UploadForm } from "./UploadForm";
import { DeletePhotoButton } from "./DeletePhotoButton";

export const dynamic = "force-dynamic";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function getPhotos(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true })); // newest first
  } catch {
    return [];
  }
}

export default function AdminGalleryPage() {
  const photos = getPhotos();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-secondary">Photo Gallery</h1>
        <span className="badge badge-primary text-white font-bold px-3 py-3">
          {photos.length} photo{photos.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Upload */}
      <UploadForm />

      {/* Grid */}
      {photos.length === 0 ? (
        <p className="text-center text-base-content/40 py-16">
          No photos yet. Upload some above.
        </p>
      ) : (
        <div>
          <h2 className="font-bold text-secondary text-lg mb-4">
            Current Photos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {photos.map((filename) => (
              <div key={filename} className="group relative">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-base-300 shadow-sm">
                  <Image
                    src={`/gallery/${filename}`}
                    alt={filename}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-1">
                  <p className="text-xs text-base-content/40 truncate px-1">
                    {filename}
                  </p>
                  <DeletePhotoButton filename={filename} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
