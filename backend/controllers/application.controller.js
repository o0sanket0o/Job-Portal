import express from "express";
import { Job } from "../models/job.model.js";
import { application } from "../models/application.model.js";

export const applyJob = async (req, res) => {
    try{
        const user = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        }
        const foundApplication = await application.findOne({job: jobId, applicant: user});
        if(foundApplication){
            return res.status(400).json({
                message: "You have already applied for this job.",
                success: false
            })
        }
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message: "Job not found", 
                success: false
            })
        }
        const newApplication = new application({
            job: jobId, 
            applicant: user,
            status: 'Pending',
        })
        await newApplication.save();
        job.applications.push(newApplication._id);
        //Stores the application for this particular job.
        await job.save();
        return res.status(201).json({
            message: "Application submitted successfully.",
            success: true,
        })
    }
    catch(err){
        console.log(err);
    }
}

export const getAppliedJobs = async (req, res) => {
    try{
        const userId = req.id;
        const found = await application.find({applicant: userId}).sort({createdAt:-1}).populate({
            //I want to get the job details for each application. Below 2 lines will show complete details of the job.
            path: "job",
            options: {sort: {createdAt: -1}},
            //For each job, I want to get company details so I am using nested populate.
            populate: {
                path: "company",
                options: {sort: {createdAt: -1}},
            }
        });
        if(!found){
            return res.status(404).json({
                message: "No applications found.",
                success: false
            })
        }
        return res.status(200).json({
            message: "Applications fetched successfully",
            success: true,
            jobs: found
        })
    }
    catch(err){
        console.log(err);
    }
}

export const getApplicants = async (req, res) => {
    //For admin to see how many people have applied for a particular job.
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "applicant",
                //Populating each application with the details of the applicant.
            }
        });
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Applicants fetched successfully.",
            success: true,
            applicants: job
        })

        //Now i want to populate each application for each job.
    }
    catch(err){
        console.log(err);
    }
}

export const updateStatus = async(req, res) => {
    try{
        const {status} = req.query;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message: "Status is required.",
                success: false
            })
        }
        //Find the application by applicant id.
        const foundApplication = await application.findById(applicationId);
        if(!foundApplication){
            return res.status(404).json({
                message: "Application not found.",
                success: false
            })
        }
        foundApplication.status = status;
        await foundApplication.save();
        return res.status(200).json({
            message: "Status updated successfully.",
            success: true,
        })
    }
    catch(err){
        console.log(err);
    }
}