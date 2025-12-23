"use client";

import Image from "next/image";
import style from "./sidebar.module.css";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const session = useSession();

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
          <li className={style.item}>
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
        <Link href="/bots">
          <li className={style.item}>
            <Image
              src="/imgs/icons/bot.svg"
              width={20}
              height={20}
              alt="боти"
            />
            <p className={style.itemName}>Боти</p>
          </li>
        </Link>
        <Link href="/leads">
          <li className={style.item}>
            <Image
              src="/imgs/icons/people.svg"
              width={20}
              height={20}
              alt="ліди"
            />
            <p className={style.itemName}>Ліди</p>
          </li>
        </Link>
        <Link href="/leads">
          <li className={style.item}>
            <Image
              src="/imgs/icons/people.svg"
              width={20}
              height={20}
              alt="ліди"
            />
            <p className={style.itemName}>Ліди</p>
          </li>
        </Link>
        <Link href="/leads">
          <li className={style.item}>
            <Image
              src="/imgs/icons/people.svg"
              width={20}
              height={20}
              alt="ліди"
            />
            <p className={style.itemName}>Ліди</p>
          </li>
        </Link>
        <Link href="/leads">
          <li className={style.item}>
            <Image
              src="/imgs/icons/people.svg"
              width={20}
              height={20}
              alt="ліди"
            />
            <p className={style.itemName}>Ліди</p>
          </li>
        </Link>
      </ul>
      <p hidden>Web dev by Andrii https://contact-page1503.vercel.app/ </p>
    </div>
  );
};

export default Sidebar;
