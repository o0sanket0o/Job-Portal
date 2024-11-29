import cors from 'cors';
import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config({});
import connectDB from './utils/db.js';
import userRoutes from "./routes/user.route.js";
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';

const app = express();

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend's origin
    credentials: true, // Allow cookies and other credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Apply CORS middleware *before* other routes
app.use(cors(corsOptions));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/application', applicationRoutes);

// Test Route
app.get('/', (req, res) => {
    console.log("Server is running");
    return res.status(200).json({ message: "Server is running" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port", PORT);
});
