"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative py-28 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={'/cta.jpg'}
                    alt="car background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative w-10/12 mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Ready to Hit the Road?
                    </h2>
                    <p className="text-gray-300 mb-10">
                        Book your dream car in minutes. Fast booking, best prices, and
                        premium experience guaranteed.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href={'/explore-cars'}>
                            <button className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 transition font-semibold flex items-center justify-center gap-2">
                                Explore Cars <ArrowRight size={18} />
                            </button>
                        </Link>
                        <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition font-semibold">
                            Contact Us
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}