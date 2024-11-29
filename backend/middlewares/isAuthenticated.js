import express from "express";
import jwt from "jsonwebtoken";
// require('dotenv').config();

const isAuthenticated = async(req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token) return res.status(401).json({errorMessage: "Unauthorized", success: false});
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.status(401).json({errorMessage: "Unauthorized", success: false});
        req.id = verified.userId;
        next();
    }
    catch(err){
        console.log(err);
    }
}

export default isAuthenticated;