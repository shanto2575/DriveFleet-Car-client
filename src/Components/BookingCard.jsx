import React from 'react'

const BookingCard = ({ cars }) => {
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
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-6 text-white shadow-lg">
            <h3 className="text-xl font-semibold">
                Book This Car
            </h3>
            <div className="space-y-2">
                <label className="text-sm text-gray-300">
                    Driver Needed
                </label>
                <select
                    name="driverNeeded"
                    className="w-full bg-white/10 border border-white/10 text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    <option className="text-black" value="no">No</option>
                    <option className="text-black" value="yes">Yes</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-300">
                    Special Note
                </label>
                <textarea
                    name="specialNote"
                    rows="3"
                    placeholder="Write any special request..."
                    className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
            </div>
            <button
                disabled={availabilityStatus !== "Available"}
                className={`w-full py-3 rounded-xl font-semibold transition duration-300 ${availabilityStatus === "Available"
                        ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                        : "bg-gray-600 text-gray-300 cursor-not-allowed"
                    }`}
            >
                Book Now
            </button>

        </div>
    )
}

export default BookingCard
