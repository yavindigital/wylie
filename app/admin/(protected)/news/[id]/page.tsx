import { readNews } from "@/lib/news";
import { notFound } from "next/navigation";
import { EditNewsForm } from "./EditNewsForm";

export const dynamic = "force-dynamic";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = readNews().find((n) => n.id === id);
  if (!item) notFound();

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-secondary">Edit Article</h1>
        <p className="text-base-content/50 text-sm mt-1">
          Changes publish immediately to the public site.
        </p>
      </div>
      <EditNewsForm item={item} />
    </div>
  );
}
