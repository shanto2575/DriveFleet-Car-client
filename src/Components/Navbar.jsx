"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { User, LogOut, CarFront, CalendarCheck } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Explore Cars", path: "/explore-cars" },
        { name: "My Bookings", path: "/my-bookings" },
        { name: "Add Cars", path: "/add-cars" },
    ];
    const {
        data: session,
        isPending,
        refetch
    } = authClient.useSession()
    // console.log(session)
    const user = session?.user;

    useEffect(() => {
        setOpen(false);
    }, [user]);

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
                {/* <div className="relative">
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
                </div> */}
                <div className="relative">
                    {!user && (
                        <Link href="/login">
                            <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-xl text-white font-semibold transition">
                                Login
                            </button>
                        </Link>
                    )}
                    {user && (
                        <>
                            <button
                                type="button"
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-0.5 rounded-xl text-white transition"
                            >
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name}[0]</Avatar.Fallback>
                                </Avatar>
                                <span className="hidden sm:block">{user?.name}</span>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">

                                    <div className="px-4 py-1 border-b border-white/10">
                                        <p className="text-white font-semibold">{user?.name}</p>
                                        <p className="text-gray-400 text-sm">{user?.email}</p>
                                    </div>

                                    <Link href="/add-cars" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-gray-300">
                                        <CarFront  /> Add Car
                                    </Link>

                                    <Link href="/my-bookings" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-gray-300">
                                        <CalendarCheck  /> My Bookings
                                    </Link>

                                    <Link href="/my-cars" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-gray-300">
                                        <CarFront  /> My Added Cars
                                    </Link>
                                    <div className="border-t border-white/10" />
                                    <button
                                        onClick={async () => {
                                            await authClient.signOut();
                                        }}
                                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-500/20 text-red-400"
                                    >
                                        <LogOut /> Logout
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                </div>

            </div>
        </nav>
    );
}