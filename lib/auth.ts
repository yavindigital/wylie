import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserByUsername, verifyPassword } from "./users";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // Check users.json first (supports multiple users)
        const user = findUserByUsername(username);
        if (user && verifyPassword(password, user.passwordHash)) {
          return { id: user.id, name: user.username, email: user.email, role: "admin" };
        }

        // Fallback: env-var credentials for initial setup before any users are added
        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "env-admin", name: username, role: "admin" };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as { role?: string }).role;
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },
});
