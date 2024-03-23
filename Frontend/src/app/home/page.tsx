import React from 'react'
import Multi from '../components/Home/Multi'
import Projects from '../components/Home/Projects'

const page = () => {
  return (
    <div className='bg-white min-h-screen text-black'>
      <br />
      <div className='container mx-auto p-2'>
        <Multi />
        <Projects />
      </div>
    </div>
  )
}

export default page