import React from 'react'
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useRef } from 'react'
import { Button } from '../ui/button'

const UpdateProfileDialog = ({open, setOpen}) => {
    const {user} = useSelector(store => store.auth);
    const fileInputRef = useRef();
    const[loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: user?.name,
        email: user?.email,
        number: user?.number,
        bio: user?.bio,
        skills: user?.skills,
        file: user?.profile.resume,
    })
    function changeInput(event){
        setInput({
            ...input,
            [event.target.id]: event.target.value
        })
    }
    function fileChange(event){
        setInput({
            ...input,
            file: event.target.files[0]
        })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
    }
  return (
    <div>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Update Profile
                    </DialogTitle>
                </DialogHeader>
                <form className='mt-4' onSubmit={submitHandler}>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <Label className='w-1/4'>Name</Label>
                            <Input value={input.name} onChange={changeInput} type='text' placeholder='Name' id='name' />
                        </div>
                        <div className='flex items-center'>
                            <Label className='w-1/4'>Email</Label>
                            <Input value={input.email} type='email' onChange={changeInput} placeholder='Email' id='email' />
                        </div>
                        <div className='flex items-center'>
                            <Label className='w-1/4'>Number</Label>
                            <Input value={input.number} type='number' onChange={changeInput} placeholder='Number' id='number'/>
                        </div>
                        <div className='flex items-center'>
                            <Label className='w-1/4'>Bio</Label>
                            <Input value={input.bio} type='text' onChange={changeInput} id='bio' placeholder='Bio' />
                        </div>
                        <div className='flex items-center'>
                            <Label className='w-1/4'>Skills</Label>
                            <Input value={input.skills} type='text' onChange={changeInput} placeholder='Skills' id='skills'/>
                        </div>
                        <div className='flex items-center'>
                            <Label className='w-1/4'>Resume</Label>
                            <Input accept='image/*' type='file' onChange={fileChange} ref={fileInputRef} className='cursor-pointer'/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <Button className='mt-4 w-full'>Update Profile</Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default UpdateProfileDialog