import { readUsers } from "@/lib/users";
import { AddUserForm, UserCard } from "./UserForms";

export const dynamic = "force-dynamic";

export default function SettingsPage() {
  const users = readUsers();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-secondary">User Management</h1>
        <p className="text-base-content/50 mt-1">
          Add admin users, update emails, and change passwords.
        </p>
      </div>

      {/* Env-var notice */}
      <div className="alert bg-base-100 border border-base-300 text-sm text-base-content/70">
        <span>
          💡 <strong>Tip:</strong> While <code>ADMIN_USERNAME</code> / <code>ADMIN_PASSWORD</code> env
          vars still work as a fallback, users created here take precedence and support individual emails.
        </span>
      </div>

      {/* Current users */}
      {users.length === 0 ? (
        <p className="text-base-content/40 text-center py-8">
          No users yet. Create one below — the env-var credentials still work in the meantime.
        </p>
      ) : (
        <div className="space-y-4">
          <h2 className="font-bold text-secondary text-lg">
            Current Users ({users.length})
          </h2>
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      )}

      {/* Add user */}
      <AddUserForm />
    </div>
  );
}
