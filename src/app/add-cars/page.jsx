// 'use client'
// import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react'
// import React from 'react'

// const AddCarsPage = () => {
//     const handleSubmit =async(e) => {
//         e.preventDefault();
//         const formData=new FormData(e.target)
//         const carsdata=Object.fromEntries(formData.entries())
//         // console.log(data)
//         const res=await fetch(`http://localhost:5000/cars`,{
//             method:'POST',
//             headers:{
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify(carsdata)
//         })
//         const data=await res.json()
//         // console.log(data)

//     }
//     return (
//         <div className='max-w-7xl mx-auto lg:my-5 border bg-amber-50'>
//             <div className="text-center space-y-3">
//                 <h1 className="text-3xl lg:text-4xl font-bold">
//                     Add New Car
//                 </h1>
//                 <p className="text-gray-500 max-w-xl mx-auto">
//                     List your car for rent. Fill in the details below so customers can easily book your vehicle.
//                 </p>
//             </div>
//             <form onSubmit={handleSubmit} className="p-5 lg:p-10 space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                     {/* Car Name */}
//                     <div className="md:col-span-2">
//                         <TextField name="carName" isRequired>
//                             <Label>Car Name</Label>
//                             <Input placeholder="Toyota Corolla" className="rounded-2xl" />
//                             <FieldError />
//                         </TextField>
//                     </div>

//                     {/* Daily Rent Price */}
//                     <TextField name="dailyRentPrice" type="number" isRequired>
//                         <Label>Daily Rent Price ($)</Label>
//                         <Input type="number" placeholder="60" className="rounded-2xl" />
//                         <FieldError />
//                     </TextField>

//                     {/* Seat Capacity */}
//                     <TextField name="seatCapacity" type="number" isRequired>
//                         <Label>Seat Capacity</Label>
//                         <Input type="number" placeholder="5" className="rounded-2xl" />
//                         <FieldError />
//                     </TextField>

//                     {/* Car Type */}
//                     <div>
//                         <Select name="carType" isRequired className="w-full" placeholder="Select Car Type">
//                             <Label>Car Type</Label>
//                             <Select.Trigger className="rounded-2xl">
//                                 <Select.Value />
//                                 <Select.Indicator />
//                             </Select.Trigger>
//                             <Select.Popover>
//                                 <ListBox>
//                                     <ListBox.Item id="Sedan">Sedan<ListBox.ItemIndicator /></ListBox.Item>
//                                     <ListBox.Item id="SUV">SUV<ListBox.ItemIndicator /></ListBox.Item>
//                                     <ListBox.Item id="Hatchback">Hatchback<ListBox.ItemIndicator /></ListBox.Item>
//                                     <ListBox.Item id="Luxury">Luxury<ListBox.ItemIndicator /></ListBox.Item>
//                                 </ListBox>
//                             </Select.Popover>
//                         </Select>
//                     </div>

//                     {/* Pickup Location */}
//                     <TextField name="pickupLocation" isRequired>
//                         <Label>Pickup Location</Label>
//                         <Input placeholder="Dhaka" className="rounded-2xl" />
//                         <FieldError />
//                     </TextField>

//                     {/* Availability */}
//                     <div>
//                         <Select name="availabilityStatus" isRequired className="w-full" placeholder="Availability">
//                             <Label>Availability Status</Label>
//                             <Select.Trigger className="rounded-2xl">
//                                 <Select.Value />
//                                 <Select.Indicator />
//                             </Select.Trigger>
//                             <Select.Popover>
//                                 <ListBox>
//                                     <ListBox.Item id="Available">Available<ListBox.ItemIndicator /></ListBox.Item>
//                                     <ListBox.Item id="Unavailable">Unavailable<ListBox.ItemIndicator /></ListBox.Item>
//                                 </ListBox>
//                             </Select.Popover>
//                         </Select>
//                     </div>

//                     {/* Image URL */}
//                     <div className="md:col-span-2">
//                         <TextField name="imageUrl" isRequired>
//                             <Label>Image URL</Label>
//                             <Input type="url" placeholder="https://i.ibb.co/car.jpg" className="rounded-2xl" />
//                             <FieldError />
//                         </TextField>
//                     </div>

//                     {/* Description */}
//                     <div className="md:col-span-2">
//                         <TextField name="description" isRequired>
//                             <Label>Description</Label>
//                             <TextArea
//                                 placeholder="Comfortable family car..."
//                                 className="rounded-3xl"
//                             />
//                             <FieldError />
//                         </TextField>
//                     </div>

//                 </div>

//                 <Button
//                     type="submit"
//                     className="w-full bg-cyan-600 text-white rounded-none"
//                 >
//                     Add Car
//                 </Button>
//             </form>
//         </div>
//     )
// }

// export default AddCarsPage
