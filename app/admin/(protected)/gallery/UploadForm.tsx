"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { uploadPhotosAction } from "./actions";

function UploadBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary text-white font-bold w-full">
      {pending ? (
        <><span className="loading loading-spinner loading-sm" /> Uploading...</>
      ) : (
        "Upload Photos"
      )}
    </button>
  );
}

export function UploadForm() {
  const [state, action] = useActionState(uploadPhotosAction, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [dragging, setDragging] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state?.uploaded) formRef.current?.reset();
    setFileCount(0);
  }, [state]);

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body gap-4">
        <h2 className="card-title text-secondary font-extrabold">⬆ Upload Photos</h2>

        {state?.error && <div className="alert alert-error text-sm">{state.error}</div>}
        {state?.uploaded && (
          <div className="alert alert-success text-sm">
            ✓ {state.uploaded} photo{state.uploaded !== 1 ? "s" : ""} uploaded successfully!
          </div>
        )}

        <form ref={formRef} action={action} className="space-y-4">
          {/* Drop zone */}
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              if (inputRef.current && e.dataTransfer.files) {
                // Transfer dragged files to the input
                const dt = new DataTransfer();
                Array.from(e.dataTransfer.files).forEach((f) => dt.items.add(f));
                inputRef.current.files = dt.files;
                setFileCount(dt.files.length);
              }
            }}
            className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
              dragging
                ? "border-primary bg-primary/5"
                : "border-base-300 hover:border-primary/50 hover:bg-base-200"
            }`}
          >
            <p className="text-4xl mb-2">📷</p>
            <p className="font-semibold text-base-content/70">
              {fileCount > 0
                ? `${fileCount} file${fileCount !== 1 ? "s" : ""} selected`
                : "Drag & drop photos here, or click to browse"}
            </p>
            <p className="text-xs text-base-content/40 mt-1">
              JPG, PNG, WebP, GIF — up to 20 MB each
            </p>
            <input
              ref={inputRef}
              name="photos"
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
              className="hidden"
              onChange={(e) => setFileCount(e.target.files?.length ?? 0)}
            />
          </div>

          <UploadBtn />
        </form>
      </div>
    </div>
  );
}
