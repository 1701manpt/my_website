export default function Main({ children }) {
  return (
    <div className="flex justify-center bg-gray-50 sm:pt-24 pt-14">
      <main className="w-[1280px] p-4 xl:my-4 rounded min-h-screen">
        {children}
      </main>
    </div>
  );
}
