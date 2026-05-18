import BookingCard from '@/Components/BookingCard';
import Image from 'next/image';
import React from 'react'

const CarsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/cars/${id}`)
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
        <div>
            <div className="max-w-7xl mx-auto px-5 py-10 space-y-10">
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-lg">
                    <Image
                        src={imageUrl || "/placeholder.jpg"}
                        alt={carName}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-5 left-5 flex gap-3">

                        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            }`}>
                            {availabilityStatus}
                        </span>
                        <span className="px-4 py-1 rounded-full text-sm font-semibold bg-white/90 backdrop-blur">
                            {carType}
                        </span>
                    </div>
                    <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur px-5 py-2 rounded-full font-bold text-lg">
                        ${dailyRentPrice}/day
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-5">
                        <h1 className="text-4xl font-bold">{carName}</h1>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-700">
                            <div className="bg-gray-100 flex flex-col px-3 py-2 rounded-xl">
                                CarType:   <span className='text-orange-500'>{carType}</span>
                            </div>
                            <div className="bg-gray-100 flex flex-col px-4 py-2 rounded-xl">
                            Seat Capacity : <span className='text-orange-500'>{seatCapacity} Seats</span> 
                            </div>
                            <div className="bg-gray-100  flex flex-col px-4 py-2 rounded-xl">
                            pickupLocation :  <span className='text-orange-500'> {pickupLocation}</span>  
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 border">

                        <h2 className="text-xl font-semibold">Car Summary</h2>

                        <div className="space-y-3 text-gray-700">

                            <p><span className="font-semibold">Name:</span> {carName}</p>
                            <p><span className="font-semibold">Type:</span> {carType}</p>
                            <p><span className="font-semibold">Seats:</span> {seatCapacity}</p>
                            <p><span className="font-semibold">Location:</span> {pickupLocation}</p>

                        </div>

                        <div className="pt-4 border-t">

                            <p className="text-2xl font-bold text-cyan-600">
                                ${dailyRentPrice}/day
                            </p>

                            <button
                                disabled={!isAvailable}
                                className={`w-full mt-4 py-3 rounded-xl font-semibold transition ${isAvailable
                                        ? "bg-black text-white hover:bg-gray-800"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                {isAvailable ? "Book This Car" : "Not Available"}
                            </button>

                        </div>

                    </div> */}
                    <div>
                        <BookingCard cars={cars} isAvailable={isAvailable} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CarsDetailsPage