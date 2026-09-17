"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from "react";


export default function Dashboard() {
    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {

        if (!session) {
            router.push('/login')
        }
    }, [session, router])

    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        profile: "",
        cover: "",
        razorpayId: "",
        razorpaySecret: "",
        PhoneNumber: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Dashboard data:", form);

        alert("Profile updated successfully!");
    };

    return (
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

                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-slate-300"
                            >
                                Name
                            </label>

                            <input
                                value={form.name}
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
                                value={form.username}
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
                                htmlFor="profile"
                                className="block mb-2 text-sm font-medium text-slate-300"
                            >
                                Profile Picture
                            </label>

                            <input
                                value={form.profile}
                                onChange={handleChange}
                                type="text"
                                name="profile"
                                id="profile"
                                placeholder="Enter profile picture URL"
                                className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                            />
                        </div>

                        {/* Cover Picture */}
                        <div className="mb-5">
                            <label
                                htmlFor="cover"
                                className="block mb-2 text-sm font-medium text-slate-300"
                            >
                                Cover Picture
                            </label>

                            <input
                                value={form.cover}
                                onChange={handleChange}
                                type="text"
                                name="cover"
                                id="cover"
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
                                value={form.razorpayId}
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
                                value={form.razorpaySecret}
                                onChange={handleChange}
                                type="text"
                                name="razorpayId"
                                id="razorpayId"
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
                                value={form.PhoneNumber}
                                onChange={handleChange}
                                type="text"
                                name="razorpayId"
                                id="razorpayId"
                                placeholder="Phone Number"
                                className="w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 placeholder-[#C9D9F5] text-slate-200"
                            />
                        </div>


                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-5 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
                        >
                            Update Profile
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
