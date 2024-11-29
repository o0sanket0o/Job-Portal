import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar , AvatarImage} from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Ghost } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate();
  return (
    <div className='p-5 rounded-md bg-white shadow-xl border-gray-100 border'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>2 days ago</p>
            <Button variant="outline" classname="rounded-full" size='icon'><Bookmark/></Button>
        </div>
        <div className='flex gap-2 my-2'>
            <Button classname="p-6" variant='outline' size='icon'>
                <Avatar>
                    <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage> 
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            {/* <div className='flex items-center gap-2 my-2'>
            </div> */}
        </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nulla magni amet maiores. Quia pariatur autem repudiandae. Earum, nulla vero.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant={Ghost}>12 positions</Badge>
                <Badge className={'text-red-500 font-bold'} variant={Ghost}>Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant={Ghost}>24 LPA</Badge>
            </div>
            <div className='flex gap-4 mt-4'>
                <Button onClick={(() => {
                    navigate('/job/description');
                })} variant='outline' >Details</Button>
                <Button className='bg-red-500'>Save For Later</Button>
            </div>

    </div>
  )
}

export default Job