
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Ініціалізація AI (робіть це поза межами POST, щоб уникнути повторного ініціалізації)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL_NAME = "gemini-2.5-flash"; // Оптимальна модель для чату

export async function POST(req) {
  try {
    const { search, searchData } = await req.json(); // Отримуємо всю історію з фронтенду

    // Краще відправляти дані як JSON-рядок, щоб AI міг їх легко обробити
    const searchString = JSON.stringify(searchData, null, 2);

    // Формування Системного Prompt
    const systemInstruction = `Адмін вводе дані по яким хоче знайти ліда, список лідів:\n\n<LEADS>${searchString}</LEADS>\n\n Маєш дати відфільтрований список з даними що в них і були. Це має бути масив об'єктів. Ніякого зайвого тексту, просто список!`;

    // --- 4. ВИКЛИК GEMINI API ---

    // Зверніть увагу: ми використовуємо chat.sendMessage або generateContent
    // Запускаємо генерацію контенту, передаючи всю історію та системну інструкцію
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: search,
      config: {
        systemInstruction: systemInstruction
      },
    });

    const aiResponseText = response.text;

    // --- 5. ВІДПОВІДЬ ФРОНТЕНДУ ---
    return NextResponse.json({
      text: aiResponseText,
    });
  } catch (error) {
    console.error("Помилка під час обробки запиту:", error);
    // Повертаємо помилку 500
    return NextResponse.json(
      { error: "Внутрішня помилка сервера. Не вдалося зв'язатися з AI." },
      { status: 500 }
    );
  }
}
