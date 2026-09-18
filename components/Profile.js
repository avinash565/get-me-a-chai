"use client"

import { useSession } from "next-auth/react"
import React from 'react'

const Profile = ({profilePicture}) => {
    const { data: session } = useSession()
  return (
    <>
    <div className="absolute -bottom-20 right-[46%] border-[#f4f3f7] border-4 rounded-full overflow-hidden size-32">
        <img className="size-32" width={100} height={100} src={profilePicture || session?.user?.image } alt="" />
    </div>
    </>
  )
}

export default Profile
