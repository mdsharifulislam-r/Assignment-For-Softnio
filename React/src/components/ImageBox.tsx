import React from 'react'

export default function ImageBox() {
  return (
    <div className='md:w-1/2 md:h-auto h-96 relative'>
      <img src='watch.jpg' alt='image' className='absolute w-full top-0 h-full object-cover left-0'/>
    </div>
  )
}
