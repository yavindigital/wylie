"use client";

import { useActionState, useState } from "react";
import type { AdminUser } from "@/lib/users";
import {
  addUserAction,
  changePasswordAction,
  updateEmailAction,
  deleteUserAction,
} from "./actions";

// ── Shared helpers ────────────────────────────────────────────────────────────
function Alert({ msg, type }: { msg: string; type: "error" | "success" }) {
  return (
    <p className={`text-sm font-semibold ${type === "error" ? "text-error" : "text-success"}`}>
      {msg}
    </p>
  );
}

// ── Add User Form ─────────────────────────────────────────────────────────────
export function AddUserForm() {
  const [state, action, pending] = useActionState(addUserAction, null);

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body gap-4">
        <h2 className="text-lg font-extrabold text-secondary">Add New User</h2>
        <form action={action} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-secondary">Username</label>
            <input name="username" type="text" required className="input input-bordered w-full" placeholder="jane" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-secondary">Email</label>
            <input name="email" type="email" required className="input input-bordered w-full" placeholder="jane@example.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-secondary">Password</label>
            <input name="password" type="password" required className="input input-bordered w-full" placeholder="••••••••" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-secondary">Confirm Password</label>
            <input name="confirm" type="password" required className="input input-bordered w-full" placeholder="••••••••" />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            {state?.error && <Alert msg={state.error} type="error" />}
            {state?.success && <Alert msg={state.success} type="success" />}
            <button type="submit" disabled={pending} className="btn btn-primary text-white font-bold w-full sm:w-auto">
              {pending ? <span className="loading loading-spinner loading-sm" /> : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Per-user card ─────────────────────────────────────────────────────────────
export function UserCard({ user }: { user: AdminUser }) {
  const [showPw, setShowPw] = useState(false);
  const [pwState, pwAction, pwPending] = useActionState(changePasswordAction, null);
  const [emailState, emailAction, emailPending] = useActionState(updateEmailAction, null);
  const [delState, delAction, delPending] = useActionState(deleteUserAction, null);

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body gap-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <p className="font-extrabold text-secondary text-lg">{user.username}</p>
            <p className="text-sm text-base-content/50">
              Added {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
          <form action={delAction}>
            <input type="hidden" name="id" value={user.id} />
            <button
              type="submit"
              disabled={delPending}
              onClick={(e) => { if (!confirm(`Delete user "${user.username}"?`)) e.preventDefault(); }}
              className="btn btn-sm btn-error text-white font-bold"
            >
              {delPending ? <span className="loading loading-spinner loading-xs" /> : "Delete"}
            </button>
          </form>
        </div>

        {delState?.error && <Alert msg={delState.error} type="error" />}

        {/* Update email */}
        <form action={emailAction} className="flex flex-col gap-2">
          <input type="hidden" name="id" value={user.id} />
          <label className="text-sm font-semibold text-secondary">Email Address</label>
          <div className="flex gap-2">
            <input name="email" type="email" required defaultValue={user.email} className="input input-bordered flex-1" />
            <button type="submit" disabled={emailPending} className="btn btn-secondary text-white font-bold shrink-0">
              {emailPending ? <span className="loading loading-spinner loading-sm" /> : "Update"}
            </button>
          </div>
          {emailState?.error && <Alert msg={emailState.error} type="error" />}
          {emailState?.success && <Alert msg={emailState.success} type="success" />}
        </form>

        {/* Change password */}
        <div>
          <button onClick={() => setShowPw((v) => !v)} className="text-sm text-primary font-semibold underline">
            {showPw ? "Cancel" : "Change Password"}
          </button>
          {showPw && (
            <form action={pwAction} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <input type="hidden" name="id" value={user.id} />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-secondary">New Password</label>
                <input name="password" type="password" required className="input input-bordered w-full" placeholder="••••••••" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-secondary">Confirm</label>
                <input name="confirm" type="password" required className="input input-bordered w-full" placeholder="••••••••" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                {pwState?.error && <Alert msg={pwState.error} type="error" />}
                {pwState?.success && <Alert msg={pwState.success} type="success" />}
                <button type="submit" disabled={pwPending} className="btn btn-primary text-white font-bold w-full sm:w-auto">
                  {pwPending ? <span className="loading loading-spinner loading-sm" /> : "Save Password"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
