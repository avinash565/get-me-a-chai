"use client"
import Profile from '@/components/Profile'
import React, { useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate } from '@/actions/useraction'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser } from '@/actions/useraction'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    // const {data: session} = useSession

    const [paymentform, setpaymenform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const [currentUser, setcurrentUser] = useState({})
    const [Payments, setPayments] = useState([])
    const SearchParams = useSearchParams()
    const router = useRouter()

    const handlechange = (e) => {
        setpaymenform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)

    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(SearchParams.get("paymentdone") == "true"){
        toast('Payment has been made', {
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
        router.push(`${username}`)
        }
    }, [])



    const pay = async (amount) => {
        //get the orderId
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "BuyMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://get-me-a-chai-five-chi.vercel.app/chai.gif",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "<name>", //your customer's name
                "email": "<email>",
                "contact": "<phone>" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();


    }
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
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full relative'>
                <img className=' w-full h-75 block' src={currentUser.coverpic || "/my-cover.gif"} alt="" />

                <div>
                    <Profile profilePicture={currentUser.profilepic} />
                </div>
            </div>
            <div className='info flex justify-center items-center my-22 text-white flex-col gap-1'>
                <div className='font-extrabold text-xl'>
                    @{username}
                </div>
                <div className='font-bold text-slate-400'>
                   Lets help {username} get a Chai!
                </div>
                <div className='text-sm text-slate-400'>
                    {Payments.length} Payments . ₹{Payments.reduce((a,b) => a + b.amount, 0)} raised
                </div>

                <div className="payment flex gap-12 w-[80%] mt-10">
                    <div className="supporters w-1/2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-10">
                        {/* show list of all the supporters as a leadreboard */}
                        <h2 className="text-xl font-bold text-amber-200 my-5">Supporters</h2>
                        <ul className='mx-5 max-h-80 overflow-y-auto pr-2'>
                            {Payments.length == 0 && <li>No payments yet</li>}
                            {Payments?.map((p, i) => {
                                return <li key={p._id || i} className="text-slate-200 my-4 flex gap-2 items-center">
                                    <img width={30} src="profile.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"
                                    </span>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="makepayment w-1/2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-10">
                        <h2 className="text-xl font-bold text-amber-200 my-5">Make a Payment</h2>
                        <div className='flex gap-3 flex-col'>
                            <input onChange={handlechange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Your Name' />

                            <input onChange={handlechange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Your Message' />

                            <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Amount' />

                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 cursor-pointer  disabled:bg-slate-600 disabled:from-slate-900" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 1 || paymentform.amount?.length < 1}>Pay</button>
                        </div>
                        <div className='flex gap-3 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700' onClick={() => pay(2000)} >Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
