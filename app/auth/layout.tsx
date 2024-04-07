export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b-2 border-blue-100 font-bold py-5 text-center">
        20% off for the next 3 days
      </div>
      {children}
    </div>
  );
}
