import React from 'react'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-4 mt-10'>
        <div className='flex flex-col gap-4 justify-center text-center items-center'>
            <span className='text-red-500 bg-gray-100 rounded-md p-2'>Get your dream job</span>
            <p className='text-5xl font-semibold'>Search Apply & <br />Get Your <span className='text-red-500'>Dream Jobs</span> </p>
            <p className='italic'>One stop solution for your job hunt</p>
        </div>
        <div className='w-full flex justify-center items-center'>
        <div className='flex justify-center items-center border h-10 border-gray-200 w-[50vw] rounded-full'>
            <input type="text" placeholder='Find your dream Job' className='px-4 h-full w-full bg-transparent outline-none'/>
            <Search className='rounded-r-full cursor-pointer bg-red-500 w-10 p-2 h-full'></Search>
        </div>
        </div>
    </div>
  )
}

export default HeroSection