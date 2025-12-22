"use client";

import Image from "next/image";
import { useState } from "react";
import style from "./bots.module.css";

const botsPage = () => {
  const [bots, setBots] = useState({
    viber: {
      img: "/imgs/icons/viber.svg",
      state: true,
    },
    telegram: {
      img: "/imgs/icons/telegram.svg",
      state: true,
    },
  });

  const handle = ({ name, e }) => {
    // виконуємо запит. Якшо нема помилок, міняємо тейт. Є помилка - не міняємо

    setBots((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        state: e.target.checked,
      },
    }));
  }

  return (
    <div className={style.page}>
      <main className={style.main}>
        <h1 className={style.title}>Мої чат боти</h1>

        <ul className={style.list}>
          {Object.entries(bots).map(([key, value], k) => (
            <li className={style.bot} key={k}>
              <div className={style.imgBox}>
                <Image
                  className={`${style.img} ${value.state? style.active : ''}`}
                  src={value.img}
                  width={100}
                  height={100}
                  alt={key}
                />
              </div>
              <p className={style.name}>{key}</p>

              <label className={style.checkWrap}>
                <input type="checkbox" checked={value.state} onClick={e => handle({name: key, e})} readOnly={true} />
                <span className={style.checkSlider}></span>
              </label>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default botsPage;
