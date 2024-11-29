import express from "express";
const router = express.Router();
import { login, register, logout, UpdateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

router.route("/login").post(login);
router.route("/register").post(singleUpload, register);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, singleUpload, UpdateProfile);

export default router;