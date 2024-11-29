import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title: {
        type: String, required: true, 
    },
    description: {
        type: String, required: true, 
    },
    requirements: [{
        type: String,
    }],
    salary: {
        type: Number, required: true,
    },
    location: {
        type: String, required: true,
    },
    jobType: {
        type: String, required: true,
    },
    position: {
        type: String, required: true,
    },
    company:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    experience: {
        type: String, 
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    }],
    //We will store all the applications here
    creatorDetails:{
        name: {type: String, required: true},
        email: {type:String, required: true},
    }
}, {timestamps: true})

export const Job = mongoose.model("Job", jobSchema);