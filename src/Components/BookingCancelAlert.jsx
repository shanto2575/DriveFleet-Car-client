"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";

export function BookingCancelAlert({ booking }) {

    const handleCancelBookin = async (id) => {
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
        })
        const data = await res.json()
        if(data){
            toast.success('Cancel Successfully')
        }
        // console.log(data)
        window.location.reload()
    }
    return (
        <AlertDialog>
            <Button variant='outline' className={'rounded border-red-400 text-red-500'}>
                <MdCancel/> Cancel
            </Button>

            <AlertDialog.Backdrop className="bg-black/60 backdrop-blur-sm">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[420px] bg-gray-900/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header className="space-y-2">
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-xl text-orange-500 font-semibold">
                                Cancel Booking?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body className="text-gray-300">
                            <p>
                                This will permanently cancel booking for{" "}
                                <strong className="text-white">
                                    {booking.destinationName}
                                </strong>.
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer className="flex gap-3">

                            <Button
                                slot="close"
                                variant="tertiary"
                                className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl"
                            >
                                Keep Booking
                            </Button>

                            <Button
                                onClick={() => handleCancelBookin(booking._id)}
                                slot="close"
                                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl"
                            >
                                Confirm Cancel
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}