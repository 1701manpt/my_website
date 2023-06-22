import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-14 fixed sm:flex justify-center hidden h-10 w-full bg-sky-700">
      <nav className="w-[1280px] flex h-full justify-start items-center text-sky-50 bg-transparent divide-x">
        <button className="px-4 text-center hover:text-sky-200">
          <Link href="/">Trang chủ</Link>
        </button>
        <button className="px-4 text-center hover:text-sky-200">
          <Link href="/events"> Sự kiện</Link>
        </button>
        <button className="px-4 text-center hover:text-sky-200">
          <Link href="/posts">Bài đăng gần đây</Link>
        </button>
        <button className="px-4 text-center hover:text-sky-200">
          <Link href="/about">Giới thiệu</Link>
        </button>
        <button className="px-4 text-center hover:text-sky-200">
          <Link href="/contact">Liên hệ</Link>
        </button>
      </nav>
    </div>
  );
}
