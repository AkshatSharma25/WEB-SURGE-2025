export function Progress({ value }: { value: number }) {
  return (
    <div className="progress w-full bg-gray-300 rounded h-2">
      <div className="bg-blue-600 h-2 rounded" style={{ width: `${value}%` }}></div>
    </div>
  );
}
