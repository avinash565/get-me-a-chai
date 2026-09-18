"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from "react";
import { updateProfile, fetchuser } from '@/actions/useraction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'


export default function Dashboard() {
    const { data: session, update } = useSession();
    const router = useRouter();
    useEffect(() => {

        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [session, router])

    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        profilepic: "",
        coverpic: "",
        razorpayId: "",
        razorpaySecret: "",
        PhoneNumber: "",
    });

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setForm(u)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className=" py-10 px-4">
                <div className="max-w-2xl mx-auto">

                    {/* Heading */}
                    <div className="mb-8 flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold text-slate-200">
                            Welcome to your Dashboard
                        </h1>

                        <p className="mt-2 text-slate-200">
                            Manage your profile and payment details
                        </p>
                    </div>

                    {/* Dashboard Card */}
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-10">

                        <form action={handleSubmit}>

                            {/* Name */}
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Name
                                </label>

                                <input
                                    value={form.name ? form.name : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200'
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Email
                                </label>

                                <input
                                    value={form.email}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>

                            {/* Username */}
                            <div className="mb-5">
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Username
                                </label>

                                <input
                                    value={form.username ? form.username : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter your username"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>

                            {/* Profile Picture */}
                            <div className="mb-5">
                                <label
                                    htmlFor="profilepic"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Profile Picture
                                </label>

                                <input
                                    value={form.profilepic ? form.profilepic : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="profilepic"
                                    id="profilepic"
                                    placeholder="Enter profile picture URL"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>

                            {/* Cover Picture */}
                            <div className="mb-5">
                                <label
                                    htmlFor="coverpic"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Cover Picture
                                </label>

                                <input
                                    value={form.coverpic ? form.coverpic : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="coverpic"
                                    id="coverpic"
                                    placeholder="Enter cover picture URL"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>

                            {/* Razorpay ID */}
                            <div className="mb-7">
                                <label
                                    htmlFor="razorpayId"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Razorpay ID
                                </label>

                                <input
                                    value={form.razorpayId ? form.razorpayId : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="razorpayId"
                                    id="razorpayId"
                                    placeholder="Enter your Razorpay ID"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>

                            {/* Razorpay Secret */}
                            <div className="mb-7">
                                <label
                                    htmlFor="razorpaySecret"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Razorpay Secret
                                </label>

                                <input
                                    value={form.razorpaySecret ? form.razorpaySecret : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="razorpaySecret"
                                    id="razorpaySecret"
                                    placeholder="Enter your Razorpay Secret"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>

                            <div className="mb-7">
                                <label
                                    htmlFor="PhoneNumber"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Contact Information
                                </label>

                                <input
                                    value={form.PhoneNumber ? form.PhoneNumber : ""}
                                    onChange={handleChange}
                                    type="text"
                                    name="PhoneNumber"
                                    id="PhoneNumber"
                                    placeholder="Phone Number"
                                    className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                                />
                            </div>


                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-5 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition cursor-pointer"
                            >
                                Save
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
