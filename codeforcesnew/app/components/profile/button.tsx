export function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="button bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-blue-300">
            {children}
        </button>
    );
}
