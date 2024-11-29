import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String, required: true, unique: true,
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    logo:{
        type: String,
        //will give url to the company's logg. To import from cloudinary.
    },
    userId: {
        //Which use registered the company.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {timestamps: true});

export const company = mongoose.model('Company', companySchema);