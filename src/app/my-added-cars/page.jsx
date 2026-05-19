
import { MyAddedCarsDelete } from '@/Components/MyAddedCarsDelete';
import { MyAddedCarsEdits } from '@/Components/MyAddedCarsEdits';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';

const MyAddedCars = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/my-added-cars/${user?.email}`)
    const MyAddedCars = await res.json()
    // console.log(MyAddedCars)
    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <h1 className='text-3xl font-bold'>My Added Cars</h1>
            <p className='text-gray-400'>Manage and view your upcoming travel plans</p>
            {
                MyAddedCars.length === 0 ? (
                    <div className='flex items-center justify-center h-[600px] border rounded-2xl my-5'>
                        <p className="text-gray-400 text-5xl font-extrabold">No cars added yet</p>
                    </div>
                    ): (
                        <div className='space-y-5'>
                            {
                                MyAddedCars.map(myadded => <div key={myadded._id} className='border rounded-2xl p-5 my-5'>
                                    <div className='flex gap-10  '>
                                        <Image
                                            src={myadded?.imageUrl}
                                            alt={myadded.carName}
                                            width={300}
                                            height={300}
                                            className='w-48 h-48'
                                        />
                                        <div className='flex flex-1 flex-col justify-between'>
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
                                            <div className='flex justify-between items-center'>
                                                <p className='text-xl text-cyan-500'>Daily RentPrice: <span className='text-red-500 font-bold'>${myadded.dailyRentPrice}</span></p>
                                                <div className='flex items-center justify-between gap-5'>
                                                    <MyAddedCarsDelete myadded={myadded}/>
                                                    <MyAddedCarsEdits myadded={myadded}/>
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