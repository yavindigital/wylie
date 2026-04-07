"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { loginAction } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary text-white w-full font-bold text-base"
    >
      {pending ? (
        <span className="loading loading-spinner loading-sm" />
      ) : (
        "Sign In"
      )}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, action] = useActionState(loginAction, null);

  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-side-no-icon.png"
            alt="David Wylie for Commissioner"
            width={220}
            height={63}
            className="h-14 w-auto"
          />
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body gap-5">
            <div className="text-center">
              <h1 className="text-2xl font-extrabold text-secondary">
                Admin Panel
              </h1>
              <p className="text-base-content/50 text-sm mt-1">
                Campaign staff only
              </p>
            </div>

            {state?.error && (
              <div className="alert alert-error text-sm py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {state.error}
              </div>
            )}

            <form action={action} className="flex flex-col gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Username</span>
                </div>
                <input
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="input input-bordered w-full"
                  placeholder="admin"
                />
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Password</span>
                </div>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input input-bordered w-full"
                  placeholder="••••••••••••"
                />
              </label>

              <SubmitButton />
            </form>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          David Wylie for Commissioner · Campaign Admin
        </p>
      </div>
    </main>
  );
}
