"use client";

import style from "./leads.module.css";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

// без повного rerender таблиці
const LeadRow = React.memo(function LeadRow({
  lead,
  checked,
  onToggle,
  changeStatus,
}) {
  return (
    <tr className={`${style.tableRow} ${checked ? style.checked : ""}`}>
      <td className={style.fixRow}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(lead.id, e.target.checked)}
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
      <td>
          <select
            value={lead.status.class}
            onChange={(e) => changeStatus(e, lead.id)}
            className={style[lead.status.class]}
          >
            <option value="leadActive">Активний</option>
            <option value="leadUnactive">Не активний</option>
            <option value="leadClosed">Закритий</option>
          </select>
      </td>
      <td>{lead.contacts.phone}</td>
      <td>{lead.contacts.phone}</td>
      <td>{lead.contacts.phone}</td>
      <td>{lead.contacts.phone}</td>
      <td>{lead.contacts.phone}</td>
      <td>{lead.contacts.phone}</td>
      <td>{lead.contacts.phone}</td>
    </tr>
  );
});

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
      status: {
        name: "Активний",
        class: "leadActive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Закритий",
        class: "leadClosed",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
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
      status: {
        name: "Не активний",
        class: "leadUnactive",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
  ];

  const [leads, setLeads] = useState(leadsDB);
  const [checkedRows, setCheckedRows] = useState(new Set());
  const action = useRef(null);

  const STATUS_MAP = {
    leadActive: "Активний",
    leadUnactive: "Не активний",
    leadClosed: "Закритий",
  };

  const delLeads = () => {
    setLeads((prev) => prev.filter((lead) => !checkedRows.has(lead.id)));
    setCheckedRows(new Set());
  };

  const toggleAll = (checked) => {
    setCheckedRows(checked ? new Set(leads.map((l) => l.id)) : new Set());
  };

  const toggleRow = useCallback((id, checked) => {
    setCheckedRows((prev) => {
      const next = new Set(prev);
      checked ? next.add(id) : next.delete(id);
      return next;
    });
  }, []);

  const changeStatus = (e, id) => {
    const className = e.target.value;
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              status: {
                class: className,
                name: STATUS_MAP[className],
              },
            }
          : lead
      )
    );
  };

  const leftScroll = useRef(0);
  const prevScroll = useRef(0);
  const scroll = (e) => {
    if (!action.current) return;

    const currentScroll = e.target.scrollLeft;
    const delta = currentScroll - prevScroll.current;

    leftScroll.current += delta;
    prevScroll.current = currentScroll;

    action.current.style.marginLeft = `${leftScroll.current}px`;
  };

  return (
    <div className={style.page} onScroll={scroll}>
      <div className={style.tableWrap}>
        <div className={style.actionWrap} ref={action}>
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
                onClick={() => setCheckedRows(new Set())}
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
                <input
                  type="checkbox"
                  onChange={(inpt) => toggleAll(inpt.target.checked)}
                />
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
              <th>Статус</th>
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
            {leads.map((lead) => (
              <LeadRow
                key={lead.id}
                lead={lead}
                checked={checkedRows.has(lead.id)}
                onToggle={toggleRow}
                changeStatus={changeStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsPage;
