"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { addNewsAction } from "./actions";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary text-white font-bold"
    >
      {pending ? <span className="loading loading-spinner loading-sm" /> : "Publish Article"}
    </button>
  );
}

export function AddNewsForm() {
  const [state, action] = useActionState(addNewsAction, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state === null && formRef.current) {
      // state null after success — don't reset on initial null
    }
  }, [state]);

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body gap-5">
        <h2 className="card-title text-secondary font-extrabold">
          ＋ Add New Article
        </h2>

        {state?.error && (
          <div className="alert alert-error text-sm">{state.error}</div>
        )}

        <form ref={formRef} action={action} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Title */}
          <label className="form-control md:col-span-2">
            <div className="label"><span className="label-text font-semibold">Title *</span></div>
            <input
              name="title"
              type="text"
              required
              className="input input-bordered w-full"
              placeholder="Campaign update headline..."
            />
          </label>

          {/* Date */}
          <label className="form-control">
            <div className="label"><span className="label-text font-semibold">Date *</span></div>
            <input
              name="date"
              type="date"
              required
              defaultValue={new Date().toISOString().slice(0, 10)}
              className="input input-bordered w-full"
            />
          </label>

          {/* Image */}
          <label className="form-control">
            <div className="label"><span className="label-text font-semibold">Photo (optional)</span></div>
            <input
              name="image"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="file-input file-input-bordered w-full"
            />
          </label>

          {/* Body */}
          <label className="form-control md:col-span-2">
            <div className="label"><span className="label-text font-semibold">Body *</span></div>
            <textarea
              name="body"
              required
              rows={6}
              className="textarea textarea-bordered w-full leading-relaxed"
              placeholder={"Write the article here...\n\nAdd a blank line between paragraphs."}
            />
          </label>

          <div className="md:col-span-2 flex justify-end">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </div>
  );
}
