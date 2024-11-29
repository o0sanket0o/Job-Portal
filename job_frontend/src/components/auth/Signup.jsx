import React, {useState, useRef} from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { Toaster } from "../ui/sonner";
//Also make the required changes in the main.jsx file as well.
import axios from "axios";
import { toast } from "sonner";
function Signup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullName: "",
    email:"",
    password:"",
    phoneNumber:"",
    role:"",
    file:null
  })
  const fileInputRef = useRef();

  function changeInput(event){
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })
  }
  function fileChange(event){
    console.log(event.target.files);
    setInput({
      ...input,
      file:event.target.files[0]
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const link = `${USER_API_ENDPOINT}/register`;
      const formData = new FormData();
      formData.append('fullName', input.fullName);
      formData.append('email', input.email);
      formData.append('password', input.password);
      formData.append('phoneNumber', input.phoneNumber);
      formData.append('role', input.role);
      const res = await axios.post(link, formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
          //To access this, there is a need of multer. So I added that in the middleware for the backend. 
          //Tells the server that it is a data with file in the request.
        },
        withCredentials: true,
        //The server is able to send cookies, authorisation headers when client and server are in different domains and if we don't set this then we won't get the cookies from server even if the server sends it
      });
      setInput({
        fullName:"",
        email:"",
        password:"",
        phoneNumber:"",
        role:"",
        file:null
      });
      if(fileInputRef.current){
        fileInputRef.current.value = "";
      }
      if(res.data.success){
        toast.success(res.data.message);
        navigate('/login');
      }else{
        toast.error(res.data.message);
      }
    }
    catch(err){
      toast.error(err.message);
      console.log(err);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form action="" className="w-1/2 border border-gray-200 rounded-md p-4 my-10" onSubmit={submitHandler} >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" value={input.fullName} onChange={changeInput} name="fullName" placeholder="Enter your full name" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" value={input.email} onChange={changeInput} name="email" placeholder="Enter your email" />
          </div>
          <div className="my-2">
            <Label>Phone number</Label>
            <Input type="number" value={input.phoneNumber} onChange={changeInput} name="phoneNumber" placeholder="Enter your phone number" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" value={input.password} onChange={changeInput} name="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className='flex gap-2 my-4'>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='student' onChange={changeInput} className='cursor-pointer' checked={input.role === 'student'}></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' checked={input.role === 'recruiter'} value='recruiter' onChange={changeInput} className='cursor-pointer'></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept='image/*' type='file'  onChange={fileChange} className='cursor-pointer' ref={fileInputRef}/>
            </div>
          </div>
          <div>
            <Button className='w-full my-4'>Sign Up</Button>
            <span className="text-sm">Already have an account? <Link to='/login' className="text-blue-600">Login</Link> </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
