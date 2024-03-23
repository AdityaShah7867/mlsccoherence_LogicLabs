'use client'
import React from 'react'
import RoomCard from '../components/Project/RoomCard'

const page = () => {
  return (
    <div className='min-h-screen bg-white text-black '>
        <br/>
        <div className='m-12  flex flex-wrap gap-16 justify-center items-center'>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        
        </div>
       
        
    </div>
  )
}

export default page