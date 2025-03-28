const getRatingColor = (rating: number) => {
    if (rating >= 2400) return "bg-red-600"
    if (rating >= 2100) return "bg-orange-600"
    if (rating >= 1900) return "bg-violet-600"
    if (rating >= 1600) return "bg-blue-600"
    if (rating >= 1400) return "bg-cyan-600"
    if (rating >= 1200) return "bg-green-600"
    return "bg-gray-600"
  };
  
  export function Badge({ children, rating }: { children: React.ReactNode; rating: number }) {
    return <span className={`badge ${getRatingColor(rating)} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md`}>{children}</span>;
  }
  