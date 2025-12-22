"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
import LoadingPage from "@/components/loading";
import Link from "next/link";

export default function Home() {
  const session = useSession();

  useEffect(() => {
    console.log("main page.jsx", session);
  }, [session]);

  return (
    <>
      {session.data ? (
        <div className={style.page}>
          <main>
            <div className={style.top}>
              {session.data.user.image && (
                <Image
                  className={style.avatar}
                  src={session.data.user.image}
                  height={100}
                  width={100}
                  alt="admin-logo"
                ></Image>
              )}
              <h2>{session.data.user.name}</h2>
              <small>{session.data.user.email}</small>
            </div>
          </main>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
