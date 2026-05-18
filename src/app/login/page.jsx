'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,

        })
        console.log(data)
        if (data) {
            toast.success('Login Successful')
            redirect('/')
        }
        if (error) {
            toast.error(error.message)
        }
    // }
    // const handleSignIn = async () => {
    //     const data = await authClient.signIn.social({
    //         provider: "google",
    //     });
    // };
    // const handleGithubSignIn = async () => {
    //     const data = await authClient.signIn.social({
    //         provider: "github"
    //     })
}
return (
    <div className="min-h-screen bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 text-white flex items-center justify-center px-6 py-10">

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Welcome Back to <br />
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        DriveFleet
                    </span>
                </h1>

                <p className="text-gray-300 text-lg max-w-xl">
                    Log in to manage your bookings, explore premium cars, and continue your journey with comfort and style.
                </p>

                <div className="flex gap-4 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                        Easy Booking
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                        Premium Cars
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                        Trusted Service
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">Login Your Account</h2>
                        <p className="text-gray-400 text-sm mt-1">Enter your credentials to continue</p>
                    </div>

                    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-white">Email</Label>
                            <Input className="bg-white/10 border-white/10 rounded-xl" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                        >
                            <Label className="text-white">Password</Label>
                            <Input className="bg-white/10 border-white/10 rounded-xl" />
                            <FieldError />
                        </TextField>

                        <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl py-3">
                            Log In
                        </Button>

                        <p className="text-center text-sm text-gray-400">
                            Don’t have an account?
                            <Link href="/signup" className="text-cyan-400 font-semibold ml-1">
                                Sign Up
                            </Link>
                        </p>

                        <div className="flex items-center gap-4">
                            <Separator className="flex-1 bg-white/20" />
                            <span className="text-gray-400 text-sm">Or continue with</span>
                            <Separator className="flex-1 bg-white/20" />
                        </div>

                        <div className="space-y-3">
                            <Button variant="outline" className="w-full rounded-xl text-white border-gray-500 hover:bg-white/10">
                                <FcGoogle /> Continue with Google
                            </Button>
                            <Button variant="outline" className="w-full rounded-xl text-white border-gray-500 hover:bg-white/10">
                                <FaGithub /> Continue with GitHub
                            </Button>
                        </div>

                    </Form>
                </div>
            </div>

        </div>
    </div>
)
}

export default LoginPage