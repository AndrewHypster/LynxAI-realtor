'use client'
import { signOut, useSession } from 'next-auth/react';
import style from './header.module.css'
import Link from 'next/link';

const Header = () => {
  const session = useSession();

  return (
    <header className={style.header}>
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          <button className={style.btn}>Вийти</button>
        </Link>
      ) : (
        <Link href="/api/auth/signin"><button className={style.btn}>Увійти</button></Link>
      )}
    </header>
  );
}

export default Header