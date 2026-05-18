"use client"
import Link from "next/link";
import { useState } from "react";
import { User, LogOut, CarFront, CalendarCheck } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Explore Cars", path: "/explore-cars" },
        { name: "My Bookings", path: "/my-bookings" },
        { name: "Add Cars", path: "/add-cars" },
        { name: "Login", path: "/login" },
        { name: "SignUp", path: "/signup" },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-linear-to-r from-gray-900/90 via-black/90 to-gray-900/90 border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    DriveFleet
                </h1>

                <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className="hover:text-white transition relative group"
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-xl text-white transition"
                    >
                        <User size={18} />
                        Profile
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">

                            <Link href="/add-cars" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-gray-300">
                                <CarFront size={18} /> Add Car
                            </Link>

                            <Link href="/my-bookings" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-gray-300">
                                <CalendarCheck size={18} /> My Bookings
                            </Link>

                            <Link href="/my-cars" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-gray-300">
                                <CarFront size={18} /> My Added Cars
                            </Link>
                            <div className="border-t border-white/10" />
                            <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-500/20 text-red-400">
                                <LogOut size={18} /> Logout
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
}