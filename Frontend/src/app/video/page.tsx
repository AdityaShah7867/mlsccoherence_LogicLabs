'use client'
import React, { useState } from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";


const page = () => {
    const [roomCode, setRoomCode] = useState('');

 
  return (
    <DefaultLayout>
        <div>
        <form >
                <div className='align-middle justify-center   '>
                    <div className="container mx-auto flex justify-center -my-24 items-center align-middle min-h-screen">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-6 -mt-16  bg-white shadow-xl border-2 rounded-lg mx-5  ">
                            <div className="md:rounded-lg md:flex md:justify-center md:items-center md:flex-col">
                                {/* You can insert an image here if needed */}
                                <img src="https://www.noteshare.online/static/media/abc.053c3bbbdf23ac8deca5.png" alt="" className='' style={{ width: '50%' }} />
                            </div>
                            <div className="md:mt-0 flex flex-col justify-center md:ml-9">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold">Enter the room code here:</h3>
                                </div>
                                <div className="flex items-center mb-3">
                                    <input
                                        value={roomCode}
                                        onChange={(e) => setRoomCode(e.target.value)}
                                        type="text"
                                        className="border border-gray-300 rounded-lg p-2 w-full"
                                        placeholder="Enter the room code"
                                        required
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg w-full"
                                        type="submit"
                                    >
                                        Enter the room
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
    </DefaultLayout>
  )
}

export default page