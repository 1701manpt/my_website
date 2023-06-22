import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Main from "./main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My website - Thái Phương Nam",
  description: "My website - Thái Phương Nam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-sky-950 sm:static relative">
          <Header />
          <Navbar />
          <Main>{children}</Main>
          <Footer />
          {/* <Aside /> */}
        </div>
      </body>
    </html>
  );
}
