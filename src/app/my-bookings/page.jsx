import { BookingCancelAlert } from '@/Components/BookingCancelAlert'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Image from 'next/image'

export const metadata = {
    title: "My Bookings",
    description:
        "View and manage your car bookings بسهولة.",
};
const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session)
    const user = session?.user;
    // console.log(user)

    if (!user?.id) {
        return <div>Please login first</div>;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`)
    const booking = await res.json()
    // console.log(booking)
    // carName, carType, userEmail, bookingDate, imageUrl, userName


    return (
        <div className="max-w-7xl mx-auto my-5 px-4">
            <h1 className="text-3xl font-bold">My Booking</h1>
            <p className="text-gray-400">
                Manage and view your upcoming travel plans
            </p>
            {booking.length === 0 ? (
                <div className="flex items-center justify-center h-[400px] md:h-[600px] border rounded-2xl my-5">
                    <p className="text-gray-400 text-2xl md:text-5xl font-extrabold text-center">
                        No cars added yet
                    </p>
                </div>
            ) : (
                <div className="space-y-5 mt-5">
                    {booking.map((booking) => (
                        <div
                            key={booking._id}
                            className="border rounded-2xl p-4 md:p-5">
                            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                                <div className="w-full md:w-[300px]">
                                    <Image
                                        src={booking?.imageUrl}
                                        alt={booking.carName}
                                        width={300}
                                        height={300}
                                        className="w-full h-auto rounded-xl object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-between gap-4">
                                    <h1 className="text-xl md:text-2xl font-bold">
                                        Car:{" "}
                                        <span className="text-orange-500 font-bold">
                                            {booking.carName}
                                        </span>
                                    </h1>
                                    <p className="text-sm md:text-base text-gray-300">
                                        Departure Date:{" "}
                                        {new Date(booking.bookingDate).toLocaleDateString(
                                            "en-GB",
                                            {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            }
                                        )}
                                    </p>
                                    <p className="text-sm md:text-base text-gray-400">
                                        Booking Id: {booking.userId}
                                    </p>
                                    <p className="text-sm md:text-base text-gray-400">
                                        Booking Email: {booking.userEmail}
                                    </p>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                        <p className="text-lg text-cyan-500">
                                            Daily Rent Price:{" "}
                                            <span className="text-red-500 font-bold">
                                                ${booking.dailyRentPrice}
                                            </span>
                                        </p>
                                        <div className="flex gap-3">
                                            <BookingCancelAlert booking={booking} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyBookingsPage
