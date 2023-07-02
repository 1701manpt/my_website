export default function UserHomeLayout({ children }) {
  return (
    <div className="relative lg:grid grid-cols-3 flex flex-col-reverse gap-8">
      <div className="col-span-2">{children}</div>
      <div className="w-full h-96 sticky xl:top-32 top-26 bg-gray-100 col-span-1 rounded shadow text-center">
        Sidebar only for home page
      </div>
    </div>
  );
}
