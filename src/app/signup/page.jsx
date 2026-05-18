"use client";

import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    Separator,
    TextField,
} from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log(user);
    };

    return (
        <div className="min-h-screen flex items-center justify-center
    bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 px-4">

            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                <div className="text-white space-y-6">
                    <h1 className="text-5xl font-bold leading-tight">
                        Start Your Journey With
                        <span className="text-orange-400"> DriveFleet </span>
                    </h1>

                    <p className="text-gray-300 text-lg">
                        Create an account to rent cars easily or earn money by listing
                        your own vehicles. Fast, secure and trusted platform.
                    </p>

                    <div className="space-y-3 text-gray-300 text-lg pt-4">
                        <p>✔ Rent cars anytime</p>
                        <p>✔ Secure & trusted system</p>
                        <p>✔ Easy booking process</p>
                        <p>✔ Earn from your car</p>
                    </div>
                </div>
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 
        shadow-2xl rounded-3xl p-8 text-white">

                    <h2 className="text-3xl font-bold text-center mb-6">
                        Create Account
                    </h2>

                    <Form className="space-y-4" onSubmit={onSubmit}>
                        <Fieldset>
                            <FieldGroup>

                                <TextField isRequired name="name">
                                    <Label className="text-white">Name</Label>
                                    <Input placeholder="Enter your name" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="image" type="url">
                                    <Label className="text-white">Image URL</Label>
                                    <Input placeholder="Profile image link" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="email" type="email">
                                    <Label className="text-white">Email</Label>
                                    <Input placeholder="Enter your email" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="password" type="password">
                                    <Label className="text-white">Password</Label>
                                    <Input placeholder="Enter password" />
                                    <Description className="text-gray-300">
                                        8+ characters with 1 uppercase & number
                                    </Description>
                                    <FieldError />
                                </TextField>

                            </FieldGroup>

                            <Fieldset.Actions>
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                                    Create Account
                                </Button>
                            </Fieldset.Actions>

                            <div className="flex items-center gap-4">
                                <Separator className="flex-1 bg-gray-600" />
                                <span className="text-orange-400 font-bold">OR</span>
                                <Separator className="flex-1 bg-gray-600" />
                            </div>

                            <div className="space-y-3">
                                <Button variant="outline" className="w-full rounded-xl text-white border-gray-500 hover:bg-white/10">
                                    <FcGoogle /> Continue with Google
                                </Button>
                                <Button variant="outline" className="w-full rounded-xl text-white border-gray-500 hover:bg-white/10">
                                    <FaGithub /> Continue with GitHub
                                </Button>
                            </div>

                        </Fieldset>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;