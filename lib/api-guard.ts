import { authConfig } from "@/configs/auth";
import { Role } from "@/types/next-auth";
import { getServerSession } from "next-auth";

export async function apiGuard(options?: {
  requireAuth?: boolean;
  roles?: Role[];
}) {
  if (!options?.requireAuth) return null;

  const session = await getServerSession(authConfig);

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  if (options.roles && !options.roles.includes(session.user.role)) {
    throw new Response("Forbidden", { status: 403 });
  }

  return session;
}
