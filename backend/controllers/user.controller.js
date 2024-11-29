import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try{
        const {fullName, email, password, phoneNumber, role} = req.body;
        // console.log(fullName, email, password, phoneNumber, role);
        if(!fullName || !email || !password || !phoneNumber || !role){
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }
        const foundUser = await User.findOne({email});
        if(foundUser){
            console.log(foundUser);
            return res.status(400).json({
                message: "User already exists.",
                success: false
            })
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = new User({fullName, email, password: hashedPass, phoneNumber, role});
        await user.save();
        return res.status(201).json({
            message: "User created successfully.",
            success: true,
        })
    }catch(err){
        console.log(err);
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "All feilds are required.",
                success: false
            })
        }
        let foundUser = await User.findOne({email});
        if(!foundUser){
            return res.status(400).json({
                message: "User does not exist.",
                success: false,
            })
        }
        const hashed = await bcrypt.compare(password, foundUser.password);
        if(!hashed){
            return res.status(400).json({
                message: "Invalid credentials.",
                success: false
            })
        }
        //I am also checking if the role is correct or not.
        const tokenData = {
            userId: foundUser._id
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: "24h"});
        foundUser = {
            id: foundUser._id,
            fullName: foundUser.fullName,
            email: foundUser.email,
            phoneNumber: foundUser.phoneNumber,
            role: foundUser.role,
            profile: foundUser.profile
        }
        //maxAge: This specifies the duration (in milliseconds) that the cookie will remain valid. Here, 1 * 24 * 60 * 60 * 1000 calculates the lifespan of the cookie to be 1 day (i.e., 1 day in milliseconds: 1 day × 24 hours × 60 minutes × 60 seconds × 1000 milliseconds). After this time, the cookie will expire and be deleted by the client.

        // httpOnly: Setting httpOnly: true restricts the cookie to HTTP requests only, meaning it won’t be accessible via JavaScript (e.g., document.cookie). This adds a layer of security by preventing client-side scripts from accessing the cookie, reducing the risk of XSS (Cross-Site Scripting) attacks.

        // sameSite: This option controls when cookies are sent with cross-site requests, offering protection against CSRF (Cross-Site Request Forgery) attacks. Setting sameSite: 'strict' means that the cookie is only sent with requests to the same site as the one that set it, preventing it from being sent with requests initiated from other websites.
        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
            message: `Welcome back ${foundUser.fullName}`,
            user: foundUser,
            success: true,
            token: token,
        })
    }
    catch(err){
        console.log(err);
    }
}

export const logout = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.status(200).json({
            message: "Logged out successfully.",
            success: true
        })
    }
    catch(err){
        console.log(err);
    }
}

export const UpdateProfile = async (req, res) => {
    try{
        const {bio, skills, fullName, email, phoneNumber} = req.body;
        // console.log(bio, skills, fullName, email, phoneNumber);
        // const file = req.file;

        //Will setup the cloudinary later.

        const skillsArray = skills?.split(",");
        let user = await User.findById(req.id);
        // console.log(req.id);
        if(!user){
            res.status(404).json({
                message: "User not found.",
                success: false
            })
        }
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;
        if(fullName)user.fullName = fullName;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;

        //Will also add the resume feature later.

        await user.save();

        user = {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile updated successfully.",
            success: true,
            user: user
        })
    }catch(err){
        console.log(err);
    }
}