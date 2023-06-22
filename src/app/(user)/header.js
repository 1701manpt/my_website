export default function Header() {
  return (
    <div className="bg-sky-100 h-14 fixed w-full flex justify-center">
      <header className="xl:w-[1280px] px-4 bg-transparent w-full h-full mt-0 flex justify-between items-center text-sky-950">
        <div>
          <h1 className="text-2xl font-bold">My website</h1>
        </div>
        <div className="flex justify-center items-center text-sm">
          <input
            className="p-2 rounded-l focus:outline-none"
            placeholder="Nhập từ khóa"
          />
          <button className="p-2 rounded-r bg-sky-500 text-sky-50">
            Tìm kiếm
          </button>
        </div>
        <div>
          <button className="p-2 h-10 w-10 rounded-full bg-sky-900 text-sky-50">
            N
          </button>
        </div>
      </header>
    </div>
  );
}
