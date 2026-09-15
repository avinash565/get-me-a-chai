import Link from "next/link";
import React from "react";

export default function Home() { 
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
        <div className="flex gap-3 font-bold text-5xl justify-center items-center ml-20">Buy Me a Chai <span><img src="/chai.gif" width={92} alt="" /></span></div>
        <p>A crowdfunding platdorm for creators. Get funded by your fans and followers. Start now!</p>
        <div className="flex gap-3">
         <Link href={'/login'}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">Start Here</button></Link>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="font-bold text-3xl text-center mb-14">Your fans can buy you a chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="border-2 border-blue-950 rounded-full p-1" src="/man.gif" width={90} alt="" />
            <p className="font-bold text-lg">Fans want to help you</p>
            <p className="w-1/2 text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="border-2 border-blue-950 rounded-full p-1" src="/coin.gif" width={90} alt="" />
            <p className="font-bold text-lg">Fans want to help you</p>
            <p className="w-1/2 text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="border-2 border-blue-950 rounded-full p-1" src="/group.gif" width={90} alt="" />
            <p className="font-bold text-lg">Fans want to help you</p>
            <p className="w-1/2 text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="font-bold text-3xl text-center mb-14">Learn more about us</h1>
        <video className="w-2xl max-w-4xl mx-auto rounded-xl" src="/intro.mp4" playsInline controls></video>
      </div>
    </>
  );
}
