"use client";

import style from "./leads.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LeadsPage = () => {
  const leadsDB = [
    {
      id: "1",
      type: "1. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "1000000грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "2",
      type: "2. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "3",
      type: "3. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "4",
      type: "4. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "5",
      type: "5. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "6",
      type: "6. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "7",
      type: "7. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "8",
      type: "8. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "9",
      type: "9. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "10",
      type: "10. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "11",
      type: "11. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "1000000грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "12",
      type: "12. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "13",
      type: "13. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "14",
      type: "14. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "15",
      type: "15. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "16",
      type: "16. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "17",
      type: "17. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "18",
      type: "18. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "19",
      type: "19. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "20",
      type: "20. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "21",
      type: "21. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "1000000грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "22",
      type: "22. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "23",
      type: "23. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "24",
      type: "24. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "25",
      type: "25. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "26",
      type: "26. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "27",
      type: "27. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "28",
      type: "28. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "29",
      type: "29. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "30",
      type: "30. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "31",
      type: "31. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "1000000грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "32",
      type: "32. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "33",
      type: "33. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "34",
      type: "34. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "35",
      type: "35. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "36",
      type: "36. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "37",
      type: "37. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "38",
      type: "38. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "39",
      type: "39. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "40",
      type: "40. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "41",
      type: "41. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "1000000грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "42",
      type: "42. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "43",
      type: "43. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "44",
      type: "44. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "45",
      type: "45. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "46",
      type: "46. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "47",
      type: "47. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "48",
      type: "48. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "49",
      type: "49. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "50",
      type: "50. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "51",
      type: "51. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "1000000грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "52",
      type: "52. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "53",
      type: "53. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "54",
      type: "54. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "55",
      type: "55. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "56",
      type: "56. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "57",
      type: "57. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "58",
      type: "58. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "59",
      type: "59. Заробітчанин",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        telegram: "@Monoliz1503",
        mail: "andrewgrechukh123@gmail.com",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
    {
      id: "60",
      type: "60. Переселенець",
      date: "21.12.2025",
      contacts: {
        phone: "0685325881",
      },
      request: {
        rooms: 2,
        budget: "0грн",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef(null);
  const SEARCH_DELAY_MS = 1000;

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [searchResults, setSearchResults] = useState(leadsDB); // знайдені пропозиції до запиту клієнта

  const search = async (inpt) => {
    // Не виконуємо запит, якщо поле пусте
    if (!inpt) return;

    try {
      console.log(`>>> Виконую API-запит для: ${inpt}`);
      setLoading(true);
      const response = await fetch("/api/gemini-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          search: inpt,
          searchData: leads,
        }),
      });

      if (!response.ok) {
        // Логуємо статус помилки для діагностики
        setError(true);
        new Error(`Помилка від AI консультанта (Статус: ${response.status})`);
      }

      const rawData = await response.json();
      console.log(rawData);

      const cleanData = rawData.text
        .replace(/^```json\s*/, "") // прибрати початок ```json
        .replace(/\s*```$/, "");

      // Логіка для парсингу відповіді AI (зберігаємо вашу логіку)
      const aiResponse = JSON.parse(cleanData);

      console.log("Відповідь пошуку (JSON):", aiResponse);
      setLoading(false);
      setError(false);
      setSearchResults(aiResponse);
    } catch (error) {
      setError(true);

      console.error("Помилка під час спілкування з API:", error);
    }
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setSearchTerm(newQuery);

    // 1. Очищаємо попередній таймер
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 2. Встановлюємо поріг для пошуку (наприклад, 3 символи)
    if (newQuery.length < 3) {
      console.log("Запит занадто короткий. Очікуємо 3+ символи.");
      setSearchResults(leads);
      return;
    }

    // 3. Встановлюємо новий таймер для Debounce
    timeoutRef.current = setTimeout(() => {
      search(newQuery);
    }, SEARCH_DELAY_MS);
  };

  // Очищення таймера при демонтажі компонента (важливо!)
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const [leads, setLeads] = useState(leadsDB);
  const [checkedRows, setCheckedRows] = useState(new Set());

  useEffect(() => {
    if (checkedRows.length > 0) {
      console.log(checkedRows);
    }
  }, [checkedRows]);

  const delLeads = () => {
    setLeads(leads.filter((lead) => !checkedRows.has(lead))); // залишаємо тільки не вибрані
    setCheckedRows(new Set()); // очищаємо вибране
  };

  return (
    <div className={style.page}>
      {/*  
       <div className={style.top}>
         <h1>Список лідів</h1>
         <form
           className={style.form}
           onSubmit={(e) => {
             e.preventDefault();
           }}
         >
           <input
             onInput={handleChange}
             className={style.search}
             value={searchTerm}
             type="text"
             placeholder="фільтрація лідів"
           />
         </form>
       </div>*/}

      <div className={style.tableWrap}>
        <div className={style.actionWrap}>
          <div
            className={`${style.action} ${
              checkedRows.size > 0 ? style.actionOpen : ""
            }`}
          >
            <p className={style.actionText}>Обрано: {checkedRows.size}шт.</p>
            <div className={style.actionBtns}>
              <button className={style.actionBtn} onClick={delLeads}>
                <Image
                  src="/imgs/icons/trash.svg"
                  width={30}
                  height={30}
                  alt="видалити"
                />
                <p>Видалити</p>
              </button>
              <button
                className={style.actionBtn}
                onClick={() => setCheckedRows([])}
              >
                <Image
                  src="/imgs/icons/x.svg"
                  width={30}
                  height={30}
                  alt="Закрити"
                />
              </button>
            </div>
          </div>
        </div>

        <table className={style.table}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Тип ліда</th>
              <th>Бюджет</th>
              <th>Локація</th>
              <th>Кімнат</th>
              <th>Дата</th>
              <th>Телефон</th>
              <th>Телеграм</th>
              <th>Вайбер</th>
              <th>Пошта</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
              <th>Ше шось</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead, k) => (
              <tr
                className={`${style.tableRow} ${
                  checkedRows.has(lead) ? style.checked : ""
                }`}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add(style.active)
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove(style.active)
                }
                key={k}
              >
                <td className={style.fixRow}>
                  <input
                    type="checkbox"
                    checked={checkedRows.has(lead)}
                    onChange={(e) => {
                      setCheckedRows((prev) => {
                        const copy = new Set(prev);
                        e.target.checked ? copy.add(lead) : copy.delete(lead);
                        return copy;
                      });
                    }}
                  />
                </td>
                <td>{lead.type}</td>
                <td>{lead.request.budget}</td>
                <td>{lead.request.district}</td>
                <td>{lead.request.rooms}</td>
                <td>{lead.date}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.telegram}</td>
                <td>{lead.contacts.viber}</td>
                <td>{lead.contacts.mail}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
                <td>{lead.contacts.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsPage;
