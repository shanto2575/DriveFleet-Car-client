"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";

export function MyAddedCarsDelete({ myadded }) {

    // console.log(myadded)
    const handleDeleteCars = async (id) => {

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`http://localhost:5000/my-added-cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
        })
        const data = await res.json()
        // console.log(data)
        window.location.reload()
    }
    return (
        <AlertDialog>
            <Button variant='outline' className={'rounded border-red-400 text-red-500'}>
                <FaTrash />Delete
            </Button>
            <AlertDialog.Backdrop className="bg-black/60 backdrop-blur-sm">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[420px] bg-gray-900/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header className="space-y-2">
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-xl text-orange-500 font-semibold">
                                Delete Cars ?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="text-gray-300">
                            <p>
                                This will permanently Delete for{" "}
                                <strong className="text-red-500">
                                    {myadded.carName}
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
                                Cancel
                            </Button>
                            <Button
                                onClick={() => handleDeleteCars(myadded._id)}
                                slot="close"
                                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl"
                            >
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}