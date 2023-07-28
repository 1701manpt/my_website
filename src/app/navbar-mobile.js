"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMobile({ navLinks, isOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={` ${
        (isOpen && "block") || " hidden"
      } fixed inset-0 bg-sky-700 mt-14 text-sky-50 shadow-lg sm:hidden`}
    >
      <nav className="divide-y my-4">
        <Link
          className={
            "p-2 flex items-center px-4 h-full text-center" +
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
                "p-2 flex items-center px-4 h-full text-center" +
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
