"use client";

import { useState } from "react";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export function BookNowButton({ isAvailable, cars }) {
    const { _id, carName } = cars;
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log({
            carId: _id,
            carName,
            ...data,
        });

        setOpen(false);
    };

    return (
        <>
            <Button
                onPress={() => setOpen(true)}
                isDisabled={!isAvailable}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            >
                Book Now
            </Button>

            {/* MODAL */}
            <Modal isOpen={open} onOpenChange={setOpen}>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[420px] bg-gray-900 text-white border border-white/10">

                            <Modal.CloseTrigger />

                            <Modal.Header>
                                <Modal.Icon className="bg-cyan-600 text-white">
                                    <Rocket className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Book {carName}</Modal.Heading>
                            </Modal.Header>

                            <form onSubmit={handleSubmit}>
                                <Modal.Body className="space-y-4">

                                    <div>
                                        <label className="text-sm text-gray-300">
                                            Driver Needed
                                        </label>
                                        <select
                                            name="driverNeeded"
                                            required
                                            className="w-full bg-white/10 border border-white/10 text-white rounded-xl p-3 mt-1"
                                        >
                                            <option className="text-black" value="no">No</option>
                                            <option className="text-black" value="yes">Yes</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-sm text-gray-300">
                                            Special Note
                                        </label>
                                        <textarea
                                            name="specialNote"
                                            rows="3"
                                            placeholder="Write any special request..."
                                            className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-400 rounded-xl p-3 mt-1"
                                        />
                                    </div>

                                </Modal.Body>

                                <Modal.Footer className="flex gap-3">
                                    <Button variant="flat" onPress={() => setOpen(false)} className="w-full">
                                        Cancel
                                    </Button>

                                    <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                                        Confirm Booking
                                    </Button>
                                </Modal.Footer>
                            </form>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
}