"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex bg-black items-center justify-between px-6 py-4 shadow-md">

            <h1 className="text-xl font-bold text-white">DriveFleet</h1>
            <ul className="flex gap-5 text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/explore-cars">Explore Cars</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
                <li><Link href="/add-cars">Add Cars</Link></li>
            </ul>

            <div className="flex items-center gap-6">
                {/* Dropdown */}
                <div className="relative">

                    {/* Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="px-3 py-2 bg-gray-200 rounded"
                    >
                        Profile ▾
                    </button>

                    {/* Dropdown Menu */}
                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">

                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/add-cars">
                                Add Car
                            </Link>

                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/my-bookings">
                                My Bookings
                            </Link>

                            <Link className="block px-4 py-2 hover:bg-gray-100" href="/my-cars">
                                My Added Cars
                            </Link>

                            <button className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}