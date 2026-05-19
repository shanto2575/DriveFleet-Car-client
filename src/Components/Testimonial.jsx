"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Nusrat Jahan",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        review: "Affordable price and great customer support!",
        rating: 5,
    },
    {
        name: "Rahim Ahmed",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        review: "Amazing service! Booking was super easy and smooth.",
        rating: 5,
    },
    {
        name: "Nusrat Jahan",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
        review: "Affordable price and great customer support!",
        rating: 5,
    },
    {
        name: "Tanvir Hasan",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        review: "Car was clean and pickup was very easy.",
        rating: 4,
    },
    {
        name: "Mehedi Hasan",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Best car rental experience in Bangladesh!",
        rating: 5,
    },
    {
        name: "Nusrat Jahan",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        review: "Affordable price and great customer support!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#0B0F19] text-white overflow-hidden">
            <div className="w-10/12 mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Real feedback from happy customers who trusted our service.
                </p>
            </div>
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] bg-[#111827] p-6 rounded-2xl shadow-lg flex-shrink-0"
                        >
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={70}
                                    height={70}
                                    className="rounded-full border-2 border-indigo-600"
                                />
                            </div>
                            <div className="flex justify-center mb-3">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-400 text-sm mb-3 text-center">
                                {item.review}
                            </p>
                            <h4 className="text-center font-semibold">
                                {item.name}
                            </h4>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}