// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({});

export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico|auth/).*)"],
};
