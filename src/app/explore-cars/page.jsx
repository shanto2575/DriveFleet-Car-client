import CarsCard from "@/Components/CarsCard"

const ExploreCarsPage = async () => {
    const res = await fetch(`http://localhost:5000/cars`)
    const carsData = await res.json()

    return (
        <div className="bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 text-white mt-5">
            <div className='w-10/12 mx-auto '>
            <div className="text-center mb-12 space-y-3">
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Explore Our <span className='text-orange-500'>Cars</span>
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Choose from a wide range of vehicles for your next trip.
                    Find the perfect ride that fits your style and budget.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-4'>
                {
                    carsData.map(cars => <CarsCard key={cars._id} cars={cars} />)
                }
            </div>
        </div>
        </div>
    )
}

export default ExploreCarsPage