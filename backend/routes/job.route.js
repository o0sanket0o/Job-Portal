import express from "express";
const router = express();
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getJobsByAdmin, getJobById, getAllJobs, postJob } from "../controllers/job.controller.js";

router.route("/post").post(isAuthenticated, postJob);
router.route("/getAllJobs").get(isAuthenticated, getAllJobs);
router.route("/getJobById/:id").get(isAuthenticated, getJobById);
router.route("/getAdminJobs").get(isAuthenticated, getJobsByAdmin);

export default router;