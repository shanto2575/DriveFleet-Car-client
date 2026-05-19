"use client";
import React from "react";
import { FaCarSide, FaHeadset, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const features = [
    {
        icon: <FaCarSide size={28} />,
        title: "Wide Range of Cars",
        desc: "From budget rides to luxury cars, choose the perfect vehicle for every trip.",
    },
    {
        icon: <FaSackDollar size={28} />,
        title: "Best Price Guarantee",
        desc: "Transparent pricing with no hidden charges. Get the best deals always.",
    },
    {
        icon: <FaHeadset size={28} />,
        title: "24/7 Customer Support",
        desc: "Our support team is always ready to help you anytime, anywhere.",
    },
    {
        icon: <FaClock size={28} />,
        title: "Quick & Easy Booking",
        desc: "Book your car within minutes with our simple and fast process.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-10/12 mx-auto mb-10 lg:py-10">
            <div className="text-center mb-14 space-y-4">
                <h2 className="text-4xl font-bold text-white">Why Choose Us</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We provide the best car rental experience with premium service and trusted support.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:scale-105 transition duration-300"
                    >
                        <div className="text-cyan-400 mb-4 flex justify-center">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}