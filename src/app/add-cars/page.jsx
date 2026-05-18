'use client'
import { authClient } from '@/lib/auth-client'
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react'
import { redirect } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const AddCarsPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const carsdata = Object.fromEntries(formData.entries())
        // console.log(data)
        const {data:tokenData}=await authClient.token()
        const res = await fetch(`http://localhost:5000/cars`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(carsdata)
        })
        const data = await res.json()
        // console.log(data)
        if (data) {
            toast.success('Cars Add Successfuly')
            redirect('/explore-cars')
        }

    }
    return (
        <div className="min-h-screen bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 text-white flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-12">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Add Your Car and Start Earning Easily
                    </h1>
                    <p className="text-gray-300 text-base lg:text-lg max-w-md">
                        List your vehicle on our platform and reach thousands of customers.
                        Manage bookings, pricing, and availability with ease.
                    </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 lg:p-10">
                    <div className="text-center space-y-2 mb-8">
                        <h2 className="text-2xl lg:text-3xl font-semibold">
                            Add New Car
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Fill in the details carefully to list your car
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-sm text-gray-300">Car Name</label>
                            <input
                                type="text"
                                name="carName"
                                placeholder="Toyota Corolla"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label className="text-sm text-gray-300">Daily Rent Price</label>
                                <input
                                    type="number"
                                    name="dailyRentPrice"
                                    placeholder="60"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-300">Seat Capacity</label>
                                <input
                                    type="number"
                                    name="seatCapacity"
                                    placeholder="5"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">Car Type</label>
                            <select
                                name="carType"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option className="text-black">Select Type</option>
                                <option className="text-black">Sedan</option>
                                <option className="text-black">SUV</option>
                                <option className="text-black">Hatchback</option>
                                <option className="text-black">Luxury</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                placeholder="Dhaka"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">Availability Status</label>
                            <select
                                name="availabilityStatus"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                <option className="text-black">Available</option>
                                <option className="text-black">Unavailable</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">Image URL</label>
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="https://i.ibb.co/car.jpg"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                placeholder="Write car details..."
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-cyan-700 transition py-3 rounded-xl font-medium"
                        >
                            Add Car
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCarsPage
