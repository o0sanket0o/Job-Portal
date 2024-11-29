import express from "express";
const router = express.Router();
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompanies, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/getCompanies/:id").get(isAuthenticated, getCompanies);
router.route("/getCompanyById/:id").get(isAuthenticated, getCompanyById);
router.route("/updateCompany/:id").put(isAuthenticated, updateCompany);

export default router;