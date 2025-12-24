"use client";

import Image from "next/image";
import style from "./sidebar.module.css";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const session = useSession();

  /* ------------------------------------ *\
  # ВЗАЛЕЖНОСТІ ВІД РОЛІ ВСТАВЛЯЄМО КНОПКИ #
  \* -------------------------------------*/
  const btns = {
    admin: [
      {
        link: "/dasboard",
        img: "/imgs/icons/people.svg",
        alt: "Дашборд",
        name: "Дашборд",
      },
      {
        link: "/bots",
        img: "/imgs/icons/bot.svg",
        alt: "Боти",
        name: "Боти",
      },
      {
        link: "/leads",
        img: "/imgs/icons/people.svg",
        alt: "Ліди",
        name: "Ліди",
      },
    ],
    manager: [
      {
        link: "/leads",
        img: "/imgs/icons/people.svg",
        alt: "Мої ліди",
        name: "Мої ліди",
      },
    ],
    realtor: [
      {
        link: "/saved-searches",
        img: "/imgs/icons/people.svg",
        alt: "Збережені пошуки",
        name: "Збережені пошуки",
      },
      {
        link: "/favorites",
        img: "/imgs/icons/people.svg",
        alt: "Обране",
        name: "Обране",
      },
      {
        link: "/audit",
        name: "Замовити детальний аудит",
      },
      {
        link: "/exclusives",
        name: "ексклюзиви",
      },
      {
        link: "/audit",
        name: "Запит на співпрацю",
      },
      {
        link: "/verify",
        name: "Верифікуватись",
      },
    ],
    investor: [
      {
        link: "/saved-searches",
        img: "/imgs/icons/people.svg",
        alt: "Збережені пошуки",
        name: "Збережені пошуки",
      },
      {
        link: "/favorites",
        img: "/imgs/icons/people.svg",
        alt: "Обране",
        name: "Обране",
      },
      {
        link: "/audit",
        name: "Замовити детальний аудит",
      },
    ],
    byer: [
      {
        link: "/chat-ai",
        img: "/imgs/icons/chat-ai.svg",
        alt: "Чат AI",
        name: "Чат AI",
      },
      {
        link: "/saved-searches",
        img: "/imgs/icons/people.svg",
        alt: "Збережені пошуки",
        name: "Збережені пошуки",
      },
      {
        link: "/favorites",
        img: "/imgs/icons/people.svg",
        alt: "Обране",
        name: "Обране",
      },
    ],
  };

  return (
    <div className={`${style.sidebar} ${isOpen && style.sidebarOpen}`}>
      <button className={style.closeBtn} onClick={() => setOpen(!isOpen)}>
        <Image
          src="/imgs/icons/arrow-left.svg"
          width={20}
          height={20}
          alt="arrow"
        />
      </button>
      <ul className={style.list}>
        <Link href="/">
          <li className={`${style.item} ${style.avatar}`}>
            {session.data && (
              <Image
                src={session.data.user.image}
                width={20}
                height={20}
                alt="головна"
              />
            )}

            <p className={style.itemName}>Головна</p>
          </li>
        </Link>
        {session.data &&
          btns[session.data.user.role].map((btn, k) => (
            <Link href={btn.link} key={k}>
              <li className={style.item}>
                {btn.img && (
                  <Image src={btn.img} width={20} height={20} alt="боти" />
                )}
                <p className={style.itemName}>{btn.name}</p>
              </li>
            </Link>
          ))}
      </ul>
      <p hidden>Web dev by Andrii https://contact-page1503.vercel.app/ </p>
    </div>
  );
};

export default Sidebar;
