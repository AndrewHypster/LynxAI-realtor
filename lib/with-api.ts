import { apiGuard } from "./api-guard";

/* 
  Обгортка для захисту апі, ніби middleware.
  Приймає:
  1. функцію шо обробляє певний роут (req запит, ctx контекст / параметри шляху, session шо дає jwt) 
  2. Об'єкт {
    requireAuth: чи користувач повинен бути авторизований,
    roles: ["масив ролей яким доступний роут"]
  }
  
  Приклади:
  Публічний роут
  export const GET = withApi(
    async () => {
      логіка роуту
    }
  );

  Приватний
  export const GET = withApi(
    async (req, ctx, session) => {
      логіка роуту
    },
    { requireAuth: true }
  );

  Приватний з ролями
  export const POST = withApi(
    async (req, ctx, session) => {
      логіка роуту
    },
    { requireAuth: true, roles: ["admin"] }
  );
*/

type Handler = (
  req: Request,
  ctx: { params?: any },
  session: any
) => Promise<Response>;

export function withApi(
  handler: Handler,
  options?: Parameters<typeof apiGuard>[0]
) {
  return async (req: Request, ctx: { params?: any }) => {
    try {
      const session = await apiGuard(options);
      return await handler(req, ctx, session);
    } catch (res) {
      return res as Response;
    }
  };
}
