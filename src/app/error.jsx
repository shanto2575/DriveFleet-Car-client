"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex items-center justify-center 
    bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 text-white px-6">

            <div className="text-center max-w-xl">

                {/* 500 */}
                <h1 className="text-7xl font-extrabold bg-linear-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                    500
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-bold mt-4">
                    Something went wrong
                </h2>

                {/* Message */}
                <p className="text-gray-400 mt-3">
                    An unexpected error occurred. Please try again.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-8">

                    {/* Try again button */}
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
                    >
                        Try Again
                    </button>

                    {/* Go home */}
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                    >
                        Go Home
                    </Link>

                </div>

                {/* Dev error message (optional) */}
                {process.env.NODE_ENV === "development" && (
                    <p className="text-red-400 mt-6 text-sm">
                        {error?.message}
                    </p>
                )}

            </div>
        </div>
    );
}