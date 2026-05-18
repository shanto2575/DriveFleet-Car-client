import Link from "next/link";
import { CiMail } from "react-icons/ci";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaLocationArrow,
    FaTwitter,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="relative text-gray-300 ">

            <div className="absolute inset-0 bg-linear-to-r from-black via-gray-900 to-black"></div>

            <div className="relative w-10/12 mx-auto px-6 py-14 flex flex-col justify-between">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            DriveFleet Cars
                        </h2>

                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            AI-powered car rental platform where users can explore smart
                            recommendations, book cars instantly and manage rentals easily.
                        </p>

                        <p className="mt-4 text-xs text-gray-500">
                            Smart • Fast • Secure
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Useful Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Explore Cars", path: "/explore" },
                                { name: "Add Car", path: "/add-car" },
                                { name: "My Bookings", path: "/my-bookings" },
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.path}
                                        className="group relative inline-block"
                                    >
                                        <span className="group-hover:text-white transition">
                                            {item.name}
                                        </span>
                                        <span className="block h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Contact Info
                        </h3>

                        <div className="text-sm text-gray-400 space-y-2">
                            <p className="flex gap-2 items-center"><FaLocationPin/>Dhaka, Bangladesh</p>
                            <p  className="flex gap-2 items-center"><MdAddCall/>+880 1700000000</p>
                            <p  className="flex gap-2 items-center"><CiMail/>support@drivefleet.ai</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-5 mt-6 text-xl">

                            <a href="#" className="hover:text-blue-500 hover:scale-110 transition">
                                <FaFacebook />
                            </a>

                            <a href="#" className="hover:text-sky-400 hover:scale-110 transition">
                                <FaTwitter />
                            </a>

                            <a href="#" className="hover:text-gray-200 hover:scale-110 transition">
                                <FaGithub />
                            </a>

                            <a href="#" className="hover:text-blue-400 hover:scale-110 transition">
                                <FaLinkedin />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} DriveFleet AI. Built with AI-powered UI.
                </div>
            </div>
        </footer>
    );
}