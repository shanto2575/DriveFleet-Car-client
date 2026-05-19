
import { MyAddedCarsDelete } from '@/Components/MyAddedCarsDelete';
import { MyAddedCarsEdits } from '@/Components/MyAddedCarsEdits';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';

export const metadata = {
    title: "My Added Cars",
    description:
        "Manage cars you have listed on DriveFleet.",
};
const MyAddedCars = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const MyAddedCars = await res.json()
    // console.log(MyAddedCars)
    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='text-center  lg:text-start'>
                <h1 className='text-3xl font-bold'>My Added Cars</h1>
                <p className='text-gray-400'>Manage and view your upcoming travel plans</p>
            </div>
            {
                MyAddedCars.length === 0 ? (
                    <div className='flex items-center justify-center h-[600px] border rounded-2xl my-5'>
                        <p className="text-gray-400 text-5xl font-extrabold">No cars added yet</p>
                    </div>
                ) : (
                    <div className='space-y-5 p-4 '>
                        {
                            MyAddedCars.map(myadded => <div key={myadded._id} className='border rounded-2xl p-5 my-5 '>
                                <div className='flex gap-10 flex-col lg:flex-row '>
                                    <Image
                                        src={myadded?.imageUrl}
                                        alt={myadded.carName}
                                        width={300}
                                        height={300}
                                        className='w-full lg:w-48 h-full lg:h-48'
                                    />
                                    <div className='flex flex-1 flex-col justify-between space-y-2'>
                                        <h1 className='text-2xl font-bold'>Car: <span className='text-orange-500 font-bold'>{myadded.carName}</span></h1>

                                        <p>
                                            Departure Date: {new Date(myadded.AddedDate).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                        <p>Booking Id : {myadded.userId}</p>
                                        <p>Booking Email : {myadded.userEmail}</p>

                                        <div className='flex flex-col lg:flex-row  lg:justify-between lg:items-center'>
                                            <p className='text-xl  text-cyan-500'>Daily RentPrice: <span className='text-red-500 font-bold'>${myadded.dailyRentPrice}</span>
                                            </p>
                                            <div className='flex my-2 lg:my-0 items-center justify-between gap-5'>
                                                <MyAddedCarsDelete myadded={myadded} />
                                                <MyAddedCarsEdits myadded={myadded} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                )
            }

        </div>
    )
}

export default MyAddedCars