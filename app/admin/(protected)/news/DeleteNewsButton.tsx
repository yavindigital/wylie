"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { deleteNewsAction } from "./actions";

function DeleteBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-sm btn-error text-white"
      onClick={(e) => {
        if (!confirm("Delete this article? This cannot be undone.")) {
          e.preventDefault();
        }
      }}
    >
      {pending ? <span className="loading loading-spinner loading-xs" /> : "Delete"}
    </button>
  );
}

export function DeleteNewsButton({ id }: { id: string }) {
  const [, action] = useActionState(deleteNewsAction, null);
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  );
}
