export default function PostLayout({ children }) {
  return (
    <div className="bg-white rounded shadow p-4 grid grid-cols-3 gap-8">
      {children}
    </div>
  );
}
