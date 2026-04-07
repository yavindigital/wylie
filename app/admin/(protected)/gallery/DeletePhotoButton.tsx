"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { deletePhotoAction } from "./actions";

function Btn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-xs btn-error text-white w-full"
      onClick={(e) => {
        if (!confirm("Delete this photo?")) e.preventDefault();
      }}
    >
      {pending ? <span className="loading loading-spinner loading-xs" /> : "Delete"}
    </button>
  );
}

export function DeletePhotoButton({ filename }: { filename: string }) {
  const [, action] = useActionState(deletePhotoAction, null);
  return (
    <form action={action}>
      <input type="hidden" name="filename" value={filename} />
      <Btn />
    </form>
  );
}
