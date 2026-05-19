import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center 
    bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 text-white px-6">
            <div className="text-center max-w-xl">
                <h1 className="text-8xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    404
                </h1>
                {/* Title */}
                <h2 className="text-3xl font-bold mt-4">
                    Oops! Page not found
                </h2>
                <p className="text-gray-400 mt-3">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <div className="flex gap-4 justify-center mt-8">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition font-medium"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/explore-cars"
                        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                    >
                        Explore Cars
                    </Link>
                </div>
            </div>
        </div>
    );
}