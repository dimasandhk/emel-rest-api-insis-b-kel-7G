import { AuthController } from "../controllers/auth.controller";
import express from "express";
const router: express.Router = express.Router();

router.post("/login", AuthController.login);

router.post("/register", AuthController.register);

export default router;
