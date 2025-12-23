"use client";

import Image from "next/image";
import style from "./sidebar.module.css";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

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
            <Image
              src="/imgs/icons/people.svg"
              width={20}
              height={20}
              alt="ліди"
            />
            <p className={style.itemName}>Головна</p>
          </li>
        </Link>
        <Link href="/bots">
          <li className={style.item}>
            <Image
              src="/imgs/icons/people.svg"
              width={20}
              height={20}
              alt="ліди"
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
    </div>
  );
};

export default Sidebar;
