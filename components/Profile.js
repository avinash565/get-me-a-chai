"use client"

import { useSession } from "next-auth/react"
import React from 'react'

const Profile = () => {
    const { data: session } = useSession()
  return (
    <>
    <div className="absolute -bottom-20 right-[46%] border-[#f4f3f7] border-4 rounded-full overflow-hidden">
        <img width={100} height={100} src={session?.user?.image || "/avatar1.png"} alt="" />
    </div>
    </>
  )
}

export default Profile
