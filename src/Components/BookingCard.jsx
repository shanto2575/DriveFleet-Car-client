import React from 'react'

const BookingCard = ({ cars, isAvailable }) => {
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
        <div>
            <div className="bg-white shadow-md rounded-2xl p-6 space-y-6 border">
                <div className="pt-4 space-y-4">
                    <h3 className="text-lg font-semibold">Book This Car</h3>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">
                            Driver Needed
                        </label>
                        <select
                            className="w-full border rounded-xl p-2"
                            name="driverNeeded"
                        >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    {/* Special Note */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">
                            Special Note
                        </label>
                        <textarea
                            className="w-full border rounded-xl p-2"
                            rows="3"
                            placeholder="Write any special request..."
                            name="specialNote"
                        />
                    </div>
                    <button
                        disabled={availabilityStatus !== "Available"}
                        className={`w-full py-3 rounded-xl font-semibold transition ${availabilityStatus === "Available"
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Book Now
                    </button>

                </div>

            </div>
        </div>
    )
}

export default BookingCard
