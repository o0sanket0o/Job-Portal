import express from "express";
const router = express.Router();

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getAppliedJobs, getApplicants, updateStatus } from "../controllers/application.controller.js";

router.route("/apply/:id").post(isAuthenticated, applyJob);
router.route("/getAppliedJobs").get(isAuthenticated, getAppliedJobs);
router.route("/getApplicants/:id").get(isAuthenticated, getApplicants);
router.route("/updateStatus/:id").put(isAuthenticated, updateStatus);

export default router;