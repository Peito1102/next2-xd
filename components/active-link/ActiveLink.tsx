'use client';

import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface props {
    path: string;
    text: string;
}

export const ActiveLink = ( { path, text }: props) => {

    const pathname = usePathname();

  return (
    <Link href={ path } className={`${pathname === path ? style.activeLink : style.link} mr-2 ml-2`}>
      { text }
    </Link>
  )
}
