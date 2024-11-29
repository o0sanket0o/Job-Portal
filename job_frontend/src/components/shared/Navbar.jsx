import React from "react";
import { Link } from "react-router-dom";
import {Popover,PopoverContent,PopoverTrigger,} from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";


function Navbar() {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.auth);
  return (
    <div className="bg-white flex justify-between max-w-7xl mx-auto mt-4 items-center">
      <div>
        <h1 className="text-2xl font-bold">
          Job <span className="text-red-500">Portal</span>
        </h1>
      </div>
      <div className="flex gap-12 items-center">
        <ul className="flex font-medium items-center gap-5">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/jobs'>Jobs</Link>
          </li>
          <li>
            <Link to='/browse'>Browse</Link>
          </li>
        </ul>
        {user ? (
          <Popover>
            <PopoverTrigger >
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="w-10 h-10 rounded-full"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-2 bg-white pt-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <div className="flex gap-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="w-10 h-10 rounded-full"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4>Sanket's Job Portal</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <User2 />
                  <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                </div>
                <div className="flex items-center h-6">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <div>
            <Link to="/login"><Button variant="outline">Login</Button></Link>
            <Link to="/signup"><Button variant="ghost">Sign Up</Button></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
