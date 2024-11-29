import { company } from "../models/company.model.js";


export const registerCompany = async (req, res) => {
    try{
        const {name, description, website, location} = req.query;
        if(!name){
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            })
        }
        const foundCompany = await company.findOne({name});
        if(foundCompany){
            return res.status(400).json({
                message: "Company already exists.",
                success: false
            })
        }
        const newCompany = new company({name: name, description: description, website: website, location: location, userId: req.id});
        await newCompany.save();
        return res.status(201).json({
            message: "Company created successfully.",
            success: true,
            company: newCompany
        })
    }
    catch(err){
        console.log(err);
    }
}

export const getCompanies = async (req, res) => {
    try{
        const companies = await company.find({userId: req.id});
        return res.status(200).json({
            message: "Companies fetched successfully.",
            success: true, 
            companies: companies
        })
    }
    catch(err){
        console.log(err);
    }
}

export const getCompanyById = async (req, res) => {
    try{
        const curr = req.params.id;
        const foundCompany = await company.findById(curr);
        return res.status(200).json({
            message: "Company fetched successfully",
            success: true,
            company: foundCompany
        })
    }
    catch(err){
        console.log(err);
    }
}

export const updateCompany = async (req, res) =>{
    try{
        const curr = req.params.id;
        const {name, description, website, location} = req.query;
        const foundCompany = await company.findById(curr);
        if(!foundCompany){
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        if(name) foundCompany.name = name;
        if(description) foundCompany.description = description;
        if(website) foundCompany.website = website;
        if(location) foundCompany.location = location;
        await foundCompany.save();
        return res.status(200).json({
            message: "Company updated successfully.",
            success: true,
            company: foundCompany
        })
    }catch(err){
        console.log(err);
    }
}