import React from 'react'
import Search from './Search'
import Filter from './Filter'
import NewP from './NewP'


const Multi = () => {
  return (
    <div>
      <div className='flex flex-wrap p-2 gap-2 justify-center items-center'>
        <Search />
        <Filter />
        <NewP />
      </div>
    </div>
  )
}

export default Multi