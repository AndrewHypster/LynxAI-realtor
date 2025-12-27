"use client";
import { useEffect, useRef, useState } from "react";
import style from "./chat-ai.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const chatAiPage = () => {
  const [chat, setChat] = useState([
    {
      role: "asist",
      blocks: [
        { type: "text", content: "Я підібрав для вас варіанти 👇" },

        {
          type: "cards",
          items: [
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/1.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/2.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/1.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/2.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/1.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/2.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/1.jpg",
            },
            {
              id: 1,
              title: "Квартира в центрі",
              price: "85 000 $",
              img: "/imgs/flats/2.jpg",
            },
          ],
        },

        {
          type: "text",
          content: "Хочете переглянути деталі або змінити фільтри?",
        },
      ],
    },
    {
      role: "user",
      blocks: [{ type: "text", content: "Супер!" }],
    },
  ]);
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const chatEndRef = useRef(null);
  const MAX_ROWS = 7;

  const handleChange = (e) => {
    setText(e.target.value);

    const textarea = textareaRef.current;
    if (!textarea) return;

    // скидаємо висоту для правильного scrollHeight
    textarea.style.height = "auto";

    // розраховуємо висоту
    const lineHeight = 24; // висота одного рядка в px (залежить від CSS)
    const maxHeight = lineHeight * MAX_ROWS;

    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
  };

  const scrollToBottom = () => {
    // Перевіряємо, чи існує елемент
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth", // Додаємо плавний ефект прокрутки
    });
  };

  useEffect(() => {
    if (chat[chat.length - 1].role == "asist") {
    } else scrollToBottom();
  }, [chat]);

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.formText.value);
    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: e.target.formText.value,
      },
    ]);
    setText("");
    textareaRef.current.style.height = "auto";
  };
  return (
    <div className={style.page}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>AI консультант</h1>
        <div className={style.headerHr}></div>
      </header>
      <ul className={style.chat}>
        {chat.map((msg, i) => (
          <li key={i} className={`${style[msg.role]} ${style.msg}`}>
            {msg.blocks?.map((block, j) => {
              if (block.type === "text") {
                return (
                  <p key={j} style={{ whiteSpace: "pre-line" }}>
                    {block.content}
                  </p>
                );
              }

              if (block.type === "cards") {
                return (
                  <Swiper
                    spaceBetween={12}
                    slidesPerView="auto"
                    freeMode
                    className={style.slider}
                    key={j}
                  >
                    {block.items.map((card, k) => (
                      <SwiperSlide key={k} className={style.slide}>
                        <div className={style.card}>
                          <img
                            src={card.img}
                            alt={card.title}
                            loading="lazy"
                            className={style.cardImg}
                          />
                          <h4>{card.title}</h4>
                          <span>{card.price}</span>
                          <div
                            style={{
                              marginTop: '.5rem',
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <button className={style.cardBtnGo}>Перейти</button>
                            <button className={style.cardBtnStar}>★</button>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                );
              }

              return null;
            })}
          </li>
        ))}
        <div ref={chatEndRef} />
      </ul>
      <footer className={style.footer}>
        <form className={style.form} onSubmit={submit}>
          <textarea
            className={style.input}
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            rows={1}
            name="formText"
            placeholder="Напиши повідомлення..."
          />
          <button className={style.send}>
            <Image
              src="/imgs/icons/paper-plane.svg"
              width={30}
              height={30}
              alt="send msg"
            />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default chatAiPage;
