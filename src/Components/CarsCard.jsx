'use client'
import React from "react";
import { Car, Users, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CarsCard = ({ cars }) => {
    const {_id,
        carName,
        carType,
        dailyRentPrice,
        description,
        imageUrl,
        pickupLocation,
        seatCapacity,
        availabilityStatus,
    } = cars;

    const isAvailable = availabilityStatus === "Available";

    return (
        <div className="bg-white rounded-[28px] shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group border">

            <div className="relative w-full h-60 overflow-hidden">

                <Image
                    src={imageUrl}
                    alt={carName}
                    fill
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                    className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md ${isAvailable ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"
                    }`}>
                    {availabilityStatus}
                </span>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full font-semibold">
                    ${dailyRentPrice}/day
                </div>

            </div>

            <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">{carName}</h2>
                <div className="flex justify-between text-gray-600 text-sm">

                    <div className="flex items-center gap-1">
                        <Car size={18} />
                        {carType}
                    </div>

                    <div className="flex items-center gap-1">
                        <Users size={18} />
                        {seatCapacity} Seats
                    </div>

                    <div className="flex items-center gap-1">
                        <MapPin size={18} />
                        {pickupLocation}
                    </div>

                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>
                <Link href={`/explore-cars/${_id}`}>
                    <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight size={18} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CarsCard;