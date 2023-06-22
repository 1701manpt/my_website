export default function Main({ children }) {
  return (
    <div className="flex justify-center bg-gray-50 pt-24">
      <main className="w-[1280px] px-4 py-2 xl:my-4 rounded min-h-screen bg-white">
        {children}
      </main>
    </div>
  );
}
