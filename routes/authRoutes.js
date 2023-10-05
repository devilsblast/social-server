import express from "express";
import { login, register } from "../controllers/authController.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
