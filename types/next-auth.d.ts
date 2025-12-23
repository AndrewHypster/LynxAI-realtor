import NextAuth, { DefaultSession } from "next-auth";

export type Role = "admin" | "manager" | "realtor" | "investor" | "buyer";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }
}
