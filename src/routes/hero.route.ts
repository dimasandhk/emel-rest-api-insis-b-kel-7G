import { HeroController } from "controllers/hero.controller";
import express from "express";
const router: express.Router = express.Router();

import { auth } from "../middleware/auth";

router.get("heroes/", auth, HeroController.getAllHeroes);
router.post("hero/", auth, HeroController.createHero);

router.get("hero/:id", auth, HeroController.getHeroById);
router.put("hero/:id", auth, HeroController.updateHero);
router.delete("hero/:id", auth, HeroController.deleteHero);

export default router;
