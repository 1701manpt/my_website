"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ navLinks }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full divide-y bg-sky-50 rounded shadow">
      <Link
        className={
          "rounded px-4 py-2" +
          " " +
          (pathname === "/dashboard" && "text-sky-50 bg-sky-400")
        }
        href="/dashboard"
      >
        Dashboard
      </Link>
      {navLinks.map((link, i) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            key={i}
            className={
              "rounded px-4 py-2" + " " + (isActive && "text-sky-50 bg-sky-400")
            }
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
