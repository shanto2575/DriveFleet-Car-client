// "use client";
// import { authClient } from "@/lib/auth-client";
// import { AlertDialog, Button } from "@heroui/react";
// import { redirect } from "next/navigation";

// export function CarsCancelAlert({ cars }) {
//     // console.log(cars)

//     const handleCancelCars = async (id) => {
//         const {data:tokenData}=await authClient.token()
//         const res = await fetch(`http://localhost:5000/cars/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-type': 'application/json',
//                 authorization:`Bearer ${tokenData?.token}`
//             },
//         })
//         const data = await res.json()
//         if(data){
//             redirect('/explore-cars')
//         }
//     }
//     return (
//         <AlertDialog>
//             <Button variant='outline' className={'rounded border-red-400 text-red-500'}>
//                 Delete
//             </Button>

//             <AlertDialog.Backdrop className="bg-black/60 backdrop-blur-sm">
//                 <AlertDialog.Container>
//                     <AlertDialog.Dialog className="sm:max-w-[420px] bg-gray-900/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl">

//                         <AlertDialog.CloseTrigger />

//                         <AlertDialog.Header className="space-y-2">
//                             <AlertDialog.Icon status="danger" />
//                             <AlertDialog.Heading className="text-xl text-orange-500 font-semibold">
//                                 Cancel Booking?
//                             </AlertDialog.Heading>
//                         </AlertDialog.Header>

//                         <AlertDialog.Body className="text-gray-300">
//                             <p>
//                                 This will permanently cancel booking for{" "}
//                                 <strong className="text-white">
//                                     {cars.carName}
//                                 </strong>.
//                                 This action cannot be undone.
//                             </p>
//                         </AlertDialog.Body>

//                         <AlertDialog.Footer className="flex gap-3">

//                             <Button
//                                 slot="close"
//                                 variant="tertiary"
//                                 className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl"
//                             >
//                                 Keep Booking
//                             </Button>

//                             <Button
//                                 onClick={() => handleCancelCars(cars._id)}
//                                 slot="close"
//                                 className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl"
//                             >
//                                 Confirm Cancel
//                             </Button>

//                         </AlertDialog.Footer>

//                     </AlertDialog.Dialog>
//                 </AlertDialog.Container>
//             </AlertDialog.Backdrop>
//         </AlertDialog>
//     );
// }