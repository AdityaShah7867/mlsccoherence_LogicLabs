import Navbar from '@/app/components/Sidebar/Sidebar'
import React from 'react'
import Dash from '../../components/Dah/Dashboard'
const page = () => {
  return (
    <div className='min-h-screen text-black bg-white'>
      <div className='flex '>
          
          
          <Navbar />
         

          <Dash />
       
        
       
      </div>
    </div>
  )
}

export default page