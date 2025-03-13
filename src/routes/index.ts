import express from "express";

const router: express.Router = express.Router();

import authRoute from "./auth.route";
import heroRoute from "./hero.route";

router.use("/auth", authRoute);
router.use(heroRoute);

export default router;
