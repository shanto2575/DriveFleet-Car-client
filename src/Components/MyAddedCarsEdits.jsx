"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

export function MyAddedCarsEdits({ myadded }) {
    const { _id,
        carName,
        carType,
        dailyRentPrice,
        description,
        imageUrl,
        pickupLocation,
        seatCapacity,
        availabilityStatus,
    } = myadded;
    // console.log(myadded)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const editsdata = Object.fromEntries(formData.entries())
        // console.log(editsdata)

        const {data:tokenData}=await authClient.token()
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${_id}`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body:JSON.stringify(editsdata)
        })
        const data=await res.json()
        // console.log(data,'data upadate')
        if(data){
            toast.success('UpdateData Successfull')
        }
        window.location.reload()


    }
    return (
        <Modal>
            <Button variant='outline' className={'rounded border-cyan-500 text-white'}>
                <FaEdit />Edits
            </Button>
            <Modal.Backdrop  className="bg-black/70 backdrop-blur-md">
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl bg-linear-to-br from-gray-800/60 via-gray-900/80 to-gray-950 border border-white/10 text-white rounded-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header className="border-b border-white/10 pb-4">
                            <Modal.Icon className="bg-cyan-500/20 text-cyan-400">
                                <FaEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edits</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl       shadow-xl p-6 lg:p-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                                        <div>
                                            <label className="text-sm text-gray-300">Daily Rent Price</label>
                                            <input
                                                type="number"
                                                defaultValue={dailyRentPrice}
                                                name="dailyRentPrice"
                                                placeholder="60"
                                                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-300">Car Type</label>
                                        <select
                                            name="carType"
                                            defaultValue={carType}
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
                                            defaultValue={pickupLocation}
                                            placeholder="Dhaka"
                                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-300">Availability Status</label>
                                        <select
                                            name="availabilityStatus"
                                            defaultValue={availabilityStatus}
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
                                            defaultValue={imageUrl}
                                            placeholder="https://i.ibb.co/car.jpg"
                                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-300">Description</label>
                                        <textarea
                                            name="description"
                                            defaultValue={description}
                                            rows="4"
                                            placeholder="Write car details..."
                                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        ></textarea>
                                    </div>
                                    <Modal.Footer >
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </div>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}