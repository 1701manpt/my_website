"use client";
import Link from "next/link";
import Aside from "./aside";
import { useState } from "react";

export default function Header({ asideLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-sky-100 h-14 fixed w-full flex justify-center z-10 shadow-lg">
      <header className="xl:w-[1280px] px-4 bg-transparent w-full h-full mt-0 flex justify-between items-center text-sky-950">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
          className="sm:hidden text-center p-2 h-10 w-10 rounded bg-gray-50 text-sky-900 shadow-lg flex justify-center items-center"
        >
          &#9776;
          <Aside asideLinks={asideLinks} isOpen={isOpen} />
        </button>
        <Link
          href="/"
          className="text-2xl font-bold sm:block hidden drop-shadow-xl p-1 rounded"
        >
          Man PT
        </Link>
        <div className="flex justify-center items-center text-sm rounded shadow-lg">
          <input
            className="p-2 rounded-l w-auto focus:w-auto focus:ring-inset focus:ring-1 focus:ring-sky-500 outline-none caret-rose-500"
            placeholder="Nhập từ khóa"
          />
          <button className="p-2 rounded-r bg-sky-500 text-sky-50">
            &#x1F50D;
          </button>
        </div>
        <Link
          href="/user"
          className="text-center p-2 h-10 w-10 rounded-full bg-sky-900 text-sky-50 shadow-lg"
        >
          N
        </Link>
      </header>
    </div>
  );
}
