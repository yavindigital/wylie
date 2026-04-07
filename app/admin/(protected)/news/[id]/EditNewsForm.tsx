"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { editNewsAction } from "../actions";
import type { NewsItem } from "@/lib/news";

function SaveBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary text-white font-bold">
      {pending ? <span className="loading loading-spinner loading-sm" /> : "Save Changes"}
    </button>
  );
}

export function EditNewsForm({ item }: { item: NewsItem }) {
  const [state, action] = useActionState(editNewsAction, null);
  const router = useRouter();

  useEffect(() => {
    // state null after a successful save; navigate back to list
    if (state === null && typeof window !== "undefined") {
      // Only navigate away after a real save (not on mount)
    }
  }, [state]);

  const handleSuccess = () => router.push("/admin/news");

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body gap-5">
        {state?.error && (
          <div className="alert alert-error text-sm">{state.error}</div>
        )}

        <form action={action} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="hidden" name="id" value={item.id} />
          <input type="hidden" name="keepImage" value={item.image} />

          {/* Title */}
          <label className="form-control md:col-span-2">
            <div className="label"><span className="label-text font-semibold">Title *</span></div>
            <input name="title" type="text" required defaultValue={item.title}
              className="input input-bordered w-full" />
          </label>

          {/* Date */}
          <label className="form-control">
            <div className="label"><span className="label-text font-semibold">Date *</span></div>
            <input name="date" type="date" required defaultValue={item.date}
              className="input input-bordered w-full" />
          </label>

          {/* Image */}
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">Replace Photo</span>
              <span className="label-text-alt text-base-content/40">Leave blank to keep current</span>
            </div>
            {item.image && (
              <div className="relative w-full h-28 rounded overflow-hidden mb-2">
                <Image src={`/news-images/${item.image}`} alt="Current" fill sizes="400px" className="object-cover" />
              </div>
            )}
            <input name="image" type="file" accept="image/jpeg,image/png,image/webp,image/gif"
              className="file-input file-input-bordered w-full" />
          </label>

          {/* Body */}
          <label className="form-control md:col-span-2">
            <div className="label"><span className="label-text font-semibold">Body *</span></div>
            <textarea name="body" required rows={8} defaultValue={item.body}
              className="textarea textarea-bordered w-full leading-relaxed" />
          </label>

          <div className="md:col-span-2 flex gap-3 justify-end">
            <button type="button" onClick={handleSuccess}
              className="btn btn-ghost">Cancel</button>
            <SaveBtn />
          </div>
        </form>
      </div>
    </div>
  );
}
