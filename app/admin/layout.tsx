// Root admin layout — no auth check here.
// Auth is enforced in app/admin/(protected)/layout.tsx
// The login page lives at app/admin/login/ and must remain accessible without auth.
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
