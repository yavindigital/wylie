import fs from "fs";
import path from "path";
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

const USERS_FILE = path.join(process.cwd(), "content", "users.json");

export function readUsers(): AdminUser[] {
  try {
    const raw = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(raw) as AdminUser[];
  } catch {
    return [];
  }
}

function writeUsers(users: AdminUser[]): void {
  fs.mkdirSync(path.dirname(USERS_FILE), { recursive: true });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  try {
    const [salt, hash] = stored.split(":");
    const hashBuffer = Buffer.from(hash, "hex");
    const derivedHash = scryptSync(password, salt, 64);
    return timingSafeEqual(hashBuffer, derivedHash);
  } catch {
    return false;
  }
}

export function findUserByUsername(username: string): AdminUser | undefined {
  return readUsers().find((u) => u.username === username);
}

export function addUser(data: {
  username: string;
  email: string;
  password: string;
}): AdminUser {
  const users = readUsers();
  if (users.find((u) => u.username === data.username)) {
    throw new Error("Username already exists.");
  }
  const user: AdminUser = {
    id: randomBytes(8).toString("hex"),
    username: data.username,
    email: data.email,
    passwordHash: hashPassword(data.password),
    createdAt: new Date().toISOString(),
  };
  writeUsers([...users, user]);
  return user;
}

export function updateUserPassword(id: string, newPassword: string): void {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) throw new Error("User not found.");
  users[idx].passwordHash = hashPassword(newPassword);
  writeUsers(users);
}

export function updateUserEmail(id: string, email: string): void {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) throw new Error("User not found.");
  users[idx].email = email;
  writeUsers(users);
}

export function deleteUser(id: string): void {
  writeUsers(readUsers().filter((u) => u.id !== id));
}
