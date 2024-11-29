import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Ghost, Pen, Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import AppliedJobsTable from "./shared/AppliedJobsTable";
import { useState } from "react";
import UpdateProfileDialog from "./shared/UpdateProfileDialog";
import { useSelector } from "react-redux";


const Profile = () => {
  const [open, setOpen] = useState(false)
  let skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Node",
    "Data Structures",
    "Algorithms",
  ];
  let resume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-md p-8 my-5">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <Avatar className="">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="h-10 w-10 rounded-full"
              ></AvatarImage>
            </Avatar>
            <div>
              <h2 className="text-lg font-bold">Full Name</h2>
              <p className="text-sm font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis quasi illo itaque?
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={(() => {
            setOpen(true);
          })}>
            <Pen />
          </Button>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex gap-2">
            <Mail />
            <span>Sanket@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <Contact />
            <span>9917853917</span>
          </div>
          <div>
            <h3 className="mb-2">Skills</h3>
            {skills.length > 0 ? (
              <div className="flex gap-2">
                {skills.map((skill, index) => (
                  <Badge variant={Ghost} key={index}>
                    {skill}
                  </Badge>
                ))}
              </div>
            ) : (
              <div>
                <Badge variant={Ghost}>NA</Badge>
              </div>
            )}
          </div>
          <div className="mt-2">
            <h3 className="text-md font-bold">Resume</h3>
            {resume ? (
              <a
                href="https://www.youtube.com"
                target="blank"
                className="text-blue-500 w-full hover:underline cursor-pointer"
              >
                YouTube
              </a>
            ) : (
              <Badge variant={Ghost}>NA</Badge>
            )}
          </div>
        </div>
        <hr />
        <div className="mt-5">
            <h2 className="text-lg font-bold">Applied Jobs</h2>
            <AppliedJobsTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Profile;
