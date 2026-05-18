import { BookNowButton } from '@/Components/BookButtonModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react'

const CarsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token}=await auth.api.getToken({
        headers:await headers()
    })
    // console.log(token)
    const res = await fetch(`http://localhost:5000/cars/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const cars = await res.json()
    const { _id,
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
        <div className="max-w-7xl mx-auto px-5 py-10 space-y-10 text-white">
            <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden rounded-3xl shadow-2xl border border-white/10">

                <Image
                    src={imageUrl || "/placeholder.jpg"}
                    alt={carName}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5 flex gap-3">

                    <span className={`px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md border border-white/10
        ${isAvailable
                            ? "bg-green-500/20 text-green-300"
                            : "bg-red-500/20 text-red-300"
                        }`}
                    >
                        {availabilityStatus}
                    </span>
                    <span className="px-4 py-1 rounded-full text-sm font-semibold bg-white/10 backdrop-blur border border-white/10">
                        {carType}
                    </span>
                </div>
                <div className="absolute bottom-5 right-5 bg-black/50 backdrop-blur px-5 py-2 rounded-full font-bold text-lg border border-white/10">
                    ${dailyRentPrice}/day
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6">
                    <h1 className="text-4xl font-bold">
                        {carName}
                    </h1>
                    <p className="text-gray-300 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-white/5 border border-white/10 backdrop-blur px-4 py-3 rounded-xl">
                            Car Type:
                            <span className="text-cyan-400 ml-2">{carType}</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur px-4 py-3 rounded-xl">
                            Seat Capacity:
                            <span className="text-cyan-400 ml-2">{seatCapacity} Seats</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur px-4 py-3 rounded-xl">
                            Location:
                            <span className="text-cyan-400 ml-2">{pickupLocation}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <BookNowButton cars={cars} isAvailable={isAvailable} />
                </div>

            </div>

        </div>
    )
}

export default CarsDetailsPage