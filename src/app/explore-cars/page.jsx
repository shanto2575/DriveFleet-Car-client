'use client'
import CarsCard from "@/Components/CarsCard"
import { useEffect, useState } from "react";


const ExploreCarsPage = () => {
    const [carsData, setCarsData] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [loading, setloading] = useState(true)

    const fetchCars = async () => {
        setloading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars?search=${search}&type=${type}`);
        const data = await res.json();
        setCarsData(data);
        setloading(false)
    };
    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchCars();
        }, 500);
        return () => clearTimeout(delaySearch);
    }, [search, type]);


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
                <div className="flex flex-col md:flex-row gap-4 mb-10">
                    <input
                        type="text"
                        placeholder="Search car name..."
                        className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white w-full"
                        onChange={(e) => setSearch(e.target.value)} />
                    <select
                        className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white"
                        onChange={(e) => setType(e.target.value)}>
                        <option className="text-black">All</option>
                        <option className="text-black">SUV</option>
                        <option className="text-black">Sedan</option>
                        <option className="text-black">Hatchback</option>
                        <option className="text-black">Luxury</option>
                    </select>
                </div>
                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-4">
                        {carsData.map(cars => (
                            <CarsCard key={cars._id} cars={cars} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExploreCarsPage