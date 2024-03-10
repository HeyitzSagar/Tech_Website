import React from 'react'

const Banner2 = () => {
  return (
    <div className='w-full flex bg-gray-700 text-center'>
        <div className='w-1/3 bg-black h-60'>
            <h1 className='text-white'>Card 1</h1>
        </div>
        <div className='w-1/3 bg-gray-400 h-60'>
            <h1 className='text-white'>Card 2</h1>
        </div>
        <div className='w-1/3 bg-gray-700 h-60'>
            <h1 className='text-white'>Card 3</h1>
        </div>
    </div>
  )
}

export default Banner2