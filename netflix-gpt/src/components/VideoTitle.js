import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-16 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-4xl font-bold'>{title}</h1>
    <p className='py-4 text-m w-1/4'>{overview}</p>
    <div className=''>
      <button className='bg-white text-xl text-black p-4 px-12  rounded-lg hover:bg-opacity-90 '>Play</button>
      <button className='mx-2 bg-gray-500 text-xl text-white p-4 px-12  bg-opacity-50 rounded-lg hover:bg-opacity-90'>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle
