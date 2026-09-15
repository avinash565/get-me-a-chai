
import React from 'react'
import Profile from '@/components/Profile'

const Username = async ({ params }) => {
    const { username } = await params
    return (
        <>
            <div className='cover w-full relative'>
                <img className=' w-full h-75 block' src="my-cover.gif" alt="" />

                <div>
                    <Profile />
                </div>
            </div>
            <div className='info flex justify-center items-center my-22 text-white flex-col gap-1'>
                <div className='font-extrabold text-xl'>
                    @{username}
                </div>
                <div className='font-bold text-slate-400'>
                    Buy a chai. Support a dream.
                </div>
                <div className='text-sm text-slate-400'>
                    Creators.Supporters.Good Vibes
                </div>

                <div className="payment flex gap-12 w-[80%] mt-10">
                    <div className="supporters w-1/2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-10">
                        {/* show list of all the supporters as a leadreboard */}
                        <h2 className="text-xl font-bold text-amber-200 my-5">Supporters</h2>
                        <ul className='mx-5'>

                            <li className="text-slate-200 my-4 flex gap-2 items-center">
                                <img width={30} src="profile.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "i support you bro"
                                </span>
                            </li>

                            <li className="text-slate-200 my-4 flex gap-2 items-center">
                                <img width={30} src="profile.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "i support you bro"
                                </span>
                            </li>

                            <li className="text-slate-200 my-4 flex gap-2 items-center">
                                <img width={30} src="profile.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "i support you bro"
                                </span>
                            </li>

                            <li className="text-slate-200 my-4 flex gap-2 items-center">
                                <img width={30} src="profile.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "i support you bro"
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="makepayment w-1/2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-10">
                        <h2 className="text-xl font-bold text-amber-200 my-5">Make a Payment</h2>
                        <div className='flex gap-3 flex-col'>
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Your Name' />

                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Your Message' />

                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Amount' />

                            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">Pay</button>
                        </div>
                        <div className='flex gap-3 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700'>Pay $10</button>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700'>Pay $20</button>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700'>Pay $30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Username
