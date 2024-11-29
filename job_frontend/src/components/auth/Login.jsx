import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { Loader, Trophy } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { setUser } from "@/redux/authSlice";
function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:"",
    role:""
  })
  const {loading} = useSelector(store => store.auth);
  //To get the loading variable.
  const dispatch = useDispatch();
  function handleChange(event){
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })
    console.log(input);
  }
  const submitHandler = async (e) => {
    //Here we don't need formData since we aren't sending file. So we will normally send the input.
    // console.log("Entered the submit handler.");
    e.preventDefault();
    try{
      //Dispatch to set the value using the function
      const link = `${USER_API_ENDPOINT}/login`;
      // console.log("Link is", link);
      const res = await axios.post(link, input, {
        headers:{
          "Content-Type" : "application/json"
        },
        withCredentials: true
      })
      console.log(res);
      setInput({
        email:"",
        password:"",
        role:""
      })
      if(res.data.success){
        toast.success(res.data.message);
        //We will store the token in local storage.
        localStorage.setItem("token", res.data.token);
        //We will redirect the user to the dashboard.
        dispatch(setUser(res.data.user));
        // console.log("Set user as ", res.data.user);
        navigate('/');
      }else{
        // console.log("Got an error")
        toast.error(res.data.message);
      }
    }catch(err){
      toast.error(err.response.data.message);
    }
    finally{
      dispatch(setLoading(false));
      //No matter if try or catch whoever is executed. But finally always run.
    }
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10" onSubmit={submitHandler}>
          <h1 className="font-bold text-xl mb-5">Login</h1>
          {/* <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter your full name" />
          </div> */}
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" name='email' value={input.email} placeholder="Enter your email" onChange={handleChange} />
          </div>
          {/* <div className="my-2">
            <Label>Phone number</Label>
            <Input type="number" placeholder="Enter your phone number" />
          </div> */}
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" name='password' value={input.password} placeholder="Enter your password" onChange={handleChange} />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className='flex gap-2 my-2'>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='student' className='cursor-pointer' onChange={handleChange} checked={input.role === 'student'}></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='recruiter' className='cursor-pointer' onChange={handleChange} checked={input.role === 'recruiter'}></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading? <Button className='w-full my-4'> <Loader className="mr-2 h-4 w-4 animate-spin"/> Please wait </Button>
            : <Button className='w-full my-4'>Login</Button>
          }
          <div>
            <span className="text-sm">Don't have an account? <Link to='/signup' className="text-blue-600">Sign Up</Link> </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
