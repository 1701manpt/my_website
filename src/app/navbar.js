"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ navLinks }) {
  const pathname = usePathname();
  return (
    <div className="mt-14 fixed sm:flex flex-wrap justify-center hidden h-10 w-full bg-sky-700 z-10 shadow-lg">
      <nav className="w-[1280px] flex h-full justify-start items-center text-sky-50 bg-transparent divide-x">
        <Link
          className={
            "flex items-center px-4 h-full text-center" +
            " " +
            (pathname === "/" && "bg-white text-sky-950")
          }
          href="/"
        >
          Trang chủ
        </Link>
        {navLinks.map((link, i) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              key={i}
              className={
                "flex items-center px-4 h-full text-center" +
                " " +
                (isActive && "bg-white text-sky-950")
              }
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
