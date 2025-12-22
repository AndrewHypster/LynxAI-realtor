"use client";

import Image from "next/image";
import style from "./leads.module.css";
import { useEffect, useRef, useState } from "react";

const LeadsPage = () => {
  const leads = [
    {
      type: "Заробітчанин",
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
      date: "21-12-2025",
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
        throw new Error(
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
      setSearchResults(null);
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
        </div>

        <ul className={style.list}>
          {searchResults.map((lead, k) => (
            <li className={style.item} key={k}>
              <div
                className={`${style.lead} ${
                  currentLead === k ? style.leadCurrent : ""
                }`}
              >
                <header className={style.leadHeader}>
                  <h3 className={style.leadType}>{lead.type}</h3>
                  <small className={style.leadDate}>{lead.date}</small>
                  <span className={style.leadBudget}>
                    {lead.request.budget}
                  </span>
                  <button
                    className={style.leadShow}
                    onClick={(btn) =>
                      setCurrentLead(currentLead === k ? null : k)
                    }
                  >
                    {">"}
                  </button>
                </header>
                <div className={style.leadInfo}>
                  <div className={style.leadProps}>
                    {Object.entries(lead.request).map(([key, value], k) => (
                      <p className={style.leadProp} key={k}>
                        <b>{key}: </b>
                        {value}
                      </p>
                    ))}
                  </div>

                  <p>
                    <b>AI висновок: </b>
                    {lead.ai_summary}
                  </p>
                </div>
                <footer className={style.leadFooter}>
                  {Object.entries(lead.contacts).map(([key, value], k) => (
                    <div className={style.leadContact} key={k}>
                      <Image
                        className={style.leadContactImg}
                        src={`/imgs/icons/${key}.svg`}
                        width={50}
                        height={50}
                        alt={key}
                      />
                      <p className={style.leadContactInfo}>
                        <b>{key}: </b>
                        {value}
                      </p>
                    </div>
                  ))}
                </footer>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default LeadsPage;
