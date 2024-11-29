import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js"; 
export const postJob = async (req, res) => {
    try{
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.query;
        const userId = req.id;
        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findById(userId);
        const job = new Job({
            title: title,
            description: description,
            requirements: requirements.split(","),
            salary: salary, 
            location: location,
            jobType: jobType,
            experience: experience,
            position: position,
            created_by: userId,
            company: companyId,
            creatorDetails:{
                name: user.fullName,
                email: user.email,
            }
        });
        await job.save();
        //Now if i want to get all the details of the user that created the job. I will use populate method
        const populatedJob = await Job.findById(job._id).populate("created_by", "fullName email phoneNumber");
        return res.status(201).json({
            message: "Job posted successfully.",
            success: true,
            job: populatedJob
        })
    }catch(err){
        console.log(err);
    }
}

//To find multiple jobs with a particular keyword.
export const getAllJobs = async (req, res) => {
    try{
        const keyWord = req.query.keyWord || "";
        const query = {
            //To search for the keyword in the title, description, location, jobType, and position fields.
            $or:[
                {title: {$regex: keyWord, $options: "i"}},
                {description: {$regex: keyWord, $options: "i"}},
                {location: {$regex: keyWord, $options: "i"}},
                {jobType: {$regex: keyWord, $options: "i"}},
                {position: {$regex: keyWord, $options: "i"}},
            ]
        }
        //Will use populate here.
        console.log(query);
        const jobs = await Job.find(query);
        //To search for the keyword in the requirements field.
        console.log(jobs);
        return res.status(200).json({
            message: "Jobs fetched successfully.",
            success: true,
            jobs: jobs
        })
    }catch(err){
        console.log(err);
    }
}
//Jobs for student
export const getJobById = async (req, res) => {
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message: "Job not found.",
                success: false
            })
        }
        return res.status(200).json({
            message: "Job fetched successfully.",
            success: true,
            job: job
        })
    }
    catch(err){
        console.log(err);
    }
}
//Get the jobs created by an admin
export const getJobsByAdmin = async (req, res) => {
    try{
        const adminId = req.id;
        const jobs = await Job.find({created_by: adminId});
        if(!jobs){
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        }
        return res.status(200).json({
            jobs: jobs, 
            success: true
        })
    }
    catch(err){
        console.log(err);
    }
}
