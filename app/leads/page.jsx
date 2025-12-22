"use client";

import Image from "next/image";
import style from "./leads.module.css";
import { useEffect, useRef, useState } from "react";

const LeadsPage = () => {
  const leads = [
    {
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
      type: "Заробітчанин",
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
      type: "Переселенець",
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
  const [searchResults, setSearchResults] = useState(leads); // знайдені пропозиції до запиту клієнта

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
          searchData: leads
        }),
      });

      if (!response.ok) {
        // Логуємо статус помилки для діагностики
        setError(true);
         new Error(
          `Помилка від AI консультанта (Статус: ${response.status})`
        );
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

  const [currentLead, setCurrentLead] = useState(null);

  return (
    <div className={style.page}>
      <h1 style={{ position: "sticky" }}>123123</h1>
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
          {leads.map((lead, i) => (
            <tr key={i}>
              <td className={style.fixRow}>
                <input type="checkbox" />
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
  );
};

export default LeadsPage;
