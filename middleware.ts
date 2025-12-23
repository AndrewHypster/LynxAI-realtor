// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
export default withAuth({});

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  const url = req.nextUrl.clone();

  // Якщо немає токена → редірект на логін
  if (!token) {
    url.pathname = "/api/auth/signin";
    return NextResponse.redirect(url);
  }

  // Отримуємо шлях сторінки
  const path = req.nextUrl.pathname;

  // Приклад захисту за ролями
  if (path.startsWith("/admin") && token.role !== "admin") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (path.startsWith("/manager") && token.role !== "manager") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (path.startsWith("/realtor") && token.role !== "realtor") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (path.startsWith("/buyer") && token.role !== "buyer") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Якщо все ок — продовжуємо
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico|auth/).*)"],
};
