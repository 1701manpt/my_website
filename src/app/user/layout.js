import Sidebar from "./sidebar";

export default function UserLayout({ children }) {
  const dataSidebar = [
    {
      name: "Thông tin cá nhân",
      href: "/user",
    },
    {
      name: "Bài đăng của tôi",
      href: "/user/posts",
    },
    {
      name: "Lịch sử tương tác",
      href: "/user/history",
    },
    {
      name: "Cài đặt tài khoản",
      href: "/user/account",
    },
  ];

  return (
    <div className="flex sm:flex-row flex-col w-full">
      <div className="sm:w-80 w-full text-center sm:text-start">
        <Sidebar navLinks={dataSidebar} />
      </div>
      <div className="px-4 py-2 w-full">{children}</div>
    </div>
  );
}
