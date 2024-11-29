import React from 'react'
import { Badge } from '../ui/badge'
import { Ghost } from 'lucide-react'

export default function LatestJobCards() {
  return (
    <div className='cursor-pointer border-gray-100 border p-5 rounded-md shadow-xl'>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant={Ghost}>12 positions</Badge>
        <Badge className={'text-red-500 font-bold'} variant={Ghost}>Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant={Ghost}>24 LPA</Badge>
      </div>
    </div>
  )
}
