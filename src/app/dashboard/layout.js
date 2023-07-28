import Navbar from "./navbar";

export default function DashboardLayout({ children }) {
  const dataSidebar = [
    {
      name: "Quản lý người dùng",
      href: "/dashboard/users",
    },
    {
      name: "Duyệt bài đăng",
      href: "/dashboard/posts",
    },
  ];

  return (
    <div className="flex sm:flex-row flex-col w-full">
      <div className="sm:w-80 w-full text-center sm:text-start">
        <Navbar navLinks={dataSidebar} />
      </div>
      <div className="px-4 py-2 w-full">{children}</div>
    </div>
  );
}
