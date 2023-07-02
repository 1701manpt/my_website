"use client";

import Link from "next/link";

export default function Footer() {
  const dataNavbar = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Sự kiện",
      href: "/events",
    },
    {
      name: "Bài đăng gần đây",
      href: "/posts",
    },
    {
      name: "Giới thiệu",
      href: "/about",
    },
    {
      name: "Liên hệ",
      href: "/contact",
    },
  ];
  return (
    <div className="w-full h-96 flex justify-center items-center bg-sky-900">
      <footer className="grid grid-cols-2 gap-2 pt-10 w-[1280px] px-4 h-full text-sky-50">
        <div className="flex flex-col">
          {dataNavbar.map((link, i) => {
            return (
              <Link
                key={i}
                className="py-1 my-1 text-sky-50 w-fit"
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col">
          <Link
            className="py-1 my-1 text-sky-50 w-fit"
            href="https://www.youtube.com/@1701manpt"
            target="_blank"
          >
            Youtube
          </Link>
          <Link
            className="py-1 my-1 text-sky-50 w-fit"
            href="https://github.com/1701manpt"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="py-1 my-1 text-sky-50 w-fit"
            href="https://www.facebook.com/thaiphuongnam1071"
            target="_blank"
          >
            Facebook
          </Link>
        </div>
      </footer>
    </div>
  );
}
