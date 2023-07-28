import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Man PT - Thái Phương Nam",
  description:
    "Đây là trang web của Thái Phương Nam. Với tên đại diện là Man PT.",
};

export default function RootLayout({ children }) {
  const dataNavbar = [
    {
      name: "Dashboard",
      href: "/dashboard",
      isAdmin: true,
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
    <html lang="en">
      <body className={inter.className}>
        <div className="text-sky-950 sm:static relative">
          <Header navLinks={dataNavbar} />
          <Navbar navLinks={dataNavbar} />
          <Main>{children}</Main>
          <Footer />
          <Link
            href="#"
            className="animate-bounce shadow-lg flex justify-center items-center text-sky-50 rounded-full bg-sky-950 p-2 fixed xl:right-10 xl:bottom-10 right-1 bottom-1 xl:w-10 xl:h-10 w-6 h-6"
          >
            &uarr;
          </Link>
        </div>
      </body>
    </html>
  );
}
