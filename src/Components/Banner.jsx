import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="min-h-[80vh] flex items-center bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 text-white px-6">

            <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center gap-10">

                <div className="flex-1 text-center md:text-left">

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Drive Your Dream Car
                    </h1>

                    <p className="mt-5 text-gray-300 text-sm md:text-lg">
                        Explore premium, budget-friendly and luxury cars. Book instantly,
                        travel comfortably and enjoy the best rental experience.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/explore-cars"
                            className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
                        >
                            Explore Cars
                        </Link>
                    </div>

                </div>

                <div className="flex-1 flex justify-center border-25 border-gray-500">
                    <div className="relative w-full max-w-2xl">
                        {/* <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full"></div> */}
                        <Image
                            src={'/Banner.png'}
                            width={600}
                            height={600}
                            alt="Car"
                            className="relative rounded-2xl  w-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}