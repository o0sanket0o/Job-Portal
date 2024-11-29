import React from "react";
import { Badge } from "../ui/badge";
import { Ghost } from "lucide-react";
import { Button } from "../ui/button";

const JobDescription = () => {
  let applied = false;
  return (
    <div className="max-w-7xl mx-auto mt-8 p-4">
      <h2 className="font-bold text-2xl">Title</h2>
      <div className="flex justify-between mt-2 items-center">
        <div className="flex gap-2">
          <Badge className={"text-blue-700 font-bold "} variant={Ghost}>
            12 positions
          </Badge>
          <Badge className={"text-red-500 font-bold "} variant={Ghost}>
            Part Time
          </Badge>
          <Badge className={"text-[#7209b7] font-bold "} variant={Ghost}>
            24 LPA
          </Badge>
        </div>
        <div>
          {applied ? (
            <Button
              disabled={applied}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Already Applied
            </Button>
          ) : (
            <Button className="bg-blue-700 text-white px-4 py-2 rounded-md" variant={Ghost}>
              Apply
            </Button>
          )}  
        </div>
      </div>
      <p className="my-4">Job Description</p>
      <hr />
      <div className="my-4">
        <h1 className="font-bold ">Role: <span className="font-light text-base">Frontend Developer</span></h1>
        <h1 className="font-bold ">Location: <span className="font-light text-base">Hyderabad</span></h1>
        <h1 className="font-bold ">Description: <span className="font-light text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolor atque possimus!</span></h1>
        <h1 className="font-bold ">Experience: <span className="font-light text-base">12 LPA</span></h1>
        <h1 className="font-bold ">Salary: <span className="font-light text-base">2 yrs</span></h1>
        <h1 className="font-bold ">Total Applicants: <span className="font-light text-base">4</span></h1>
        <h1 className="font-bold ">Posted Data: <span className="font-light text-base">Frontend Developer</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
