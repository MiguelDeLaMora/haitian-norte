export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-black text-white px-6 py-3 rounded-md">
      {children}
    </button>
  );
}