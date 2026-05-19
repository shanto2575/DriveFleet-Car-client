import { BookNowButton } from '@/Components/BookButtonModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';


const CarsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    if (!res.ok) {
        notFound()
    }
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
        bookingCount
    } = cars;
    const isAvailable = availabilityStatus === "Available";
    return (
        <div className="max-w-7xl mx-auto px-5 py-6 space-y-4 text-white">
            <div className=" text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold">
                    {carName}
                </h1>
                <p className="text-gray-400 text-sm">
                    Premium car for your comfortable journey
                </p>
            </div>
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
                    <p className="text-sm text-gray-400 mt-2">
                        Bookings: <span className="text-orange-400 font-semibold">
                            {bookingCount || 0}
                        </span>
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-4 space-y-2 mb-4">
                    <h3 className="text-lg font-semibold text-white">
                        Quick Info
                    </h3>

                    <div className="flex justify-between text-sm text-gray-300">
                        <span>Price per day</span>
                        <span className="text-cyan-400 font-semibold">
                            ${dailyRentPrice}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-300">
                        <span>Location</span>
                        <span>{pickupLocation}</span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-300">
                        <span>Seats</span>
                        <span>{seatCapacity}</span>
                    </div>
                    <div>
                        <BookNowButton cars={cars} isAvailable={isAvailable} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarsDetailsPage