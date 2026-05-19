import { BookingCancelAlert } from '@/Components/BookingCancelAlert'
import { auth } from '@/lib/auth'
import { Button } from '@heroui/react'
import { Bokor } from 'next/font/google'
import { headers } from 'next/headers'
import Image from 'next/image'

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

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const booking = await res.json()
    // console.log(booking)
    // carName, carType, userEmail, bookingDate, imageUrl, userName


    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <h1 className='text-3xl font-bold'>My Booking</h1>
            <p className='text-gray-400'>Manage and view your upcoming travel plans</p>
            {
                booking.length === 0 ? (
                    <div className='flex items-center justify-center h-[600px] border rounded-2xl my-5'>
                        <p className="text-gray-400 text-5xl font-extrabold">No cars added yet</p>
                    </div>
                ) : (
                    <div className='space-y-5'>
                        {
                            booking.map(booking => <div key={booking._id} className='border rounded-2xl p-5 my-5'>
                                <div className='flex gap-10 '>
                                    <Image
                                        src={booking?.imageUrl}
                                        alt={booking.carName}
                                        width={300}
                                        height={300}
                                    />
                                    <div className='flex flex-1 flex-col justify-between'>
                                        <h1 className='text-2xl font-bold'>Car: <span className='text-orange-500 font-bold'>{booking.carName}</span></h1>

                                        <p>
                                            Departure Date: {new Date(booking.bookingDate).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                        <p>Booking Id : {booking.userId}</p>
                                        <p>Booking Email : {booking.userEmail}</p>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xl text-cyan-500'>Daily RentPrice: <span className='text-red-500 font-bold'>${booking.dailyRentPrice}</span></p>
                                            <div className='flex items-center justify-between gap-5'>
                                                <BookingCancelAlert booking={booking} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                )
            }

        </div >
    )
}

export default MyBookingsPage
