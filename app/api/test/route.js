import {withApi} from '@/lib/with-api.ts'
import { NextResponse } from 'next/server';

export const GET = withApi(
  async (req) => {
    try {
      return NextResponse.json({
        text: "Дані відправлено на фронт",
      });
    } catch (error) {
      console.error("Помилка під час обробки запиту:", error);
      // Повертаємо помилку 500
      return NextResponse.json(
        { error: "Внутрішня помилка сервера. Не вдалося зв'язатися з AI." },
        { status: 500 }
      );
    }
  },
  { requireAuth: true, roles: ['manager', 'admin'] }
);
