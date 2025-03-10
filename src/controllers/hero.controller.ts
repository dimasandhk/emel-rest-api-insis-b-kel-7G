import { type NextFunction, type Request, type Response } from "express";

import {
  HeroService,
  type TCreateHeroRequest,
  type TUpdateHeroRequest
} from "services/hero.service";

export const HeroController = {
  async getAllHeroes(req: Request, res: Response, next: NextFunction) {
    try {
      const heroes = await HeroService.getAllHeroes();
      res.status(200).json({
        status: true,
        message: "Heroes fetched successfully",
        data: heroes
      });
    } catch (err: any) {
      res.status(400).send({
        status: false,
        message: err.message,
        data: {}
      });
    }
  },

  async getHeroById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const hero = await HeroService.getHeroById(id);

      if (!hero) {
        res.status(404).json({
          status: false,
          message: "Hero not found",
          data: {}
        });
        return;
      }

      res.status(200).json({
        status: true,
        message: "Hero fetched successfully",
        data: hero
      });
    } catch (err: any) {
      res.status(400).send({
        status: false,
        message: err.message,
        data: {}
      });
    }
  },

  async createHero(req: Request, res: Response, next: NextFunction) {
    try {
      const hero: TCreateHeroRequest = req.body;
      const newHero = await HeroService.createHero(hero as TCreateHeroRequest);

      res.status(201).json({
        status: true,
        message: "Hero created successfully",
        data: newHero
      });
    } catch (err: any) {
      res.status(400).send({
        status: false,
        message: err.message,
        data: {}
      });
    }
  },

  async updateHero(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const hero: TUpdateHeroRequest = req.body;
      const updatedHero = await HeroService.updateHero(
        id,
        hero as TUpdateHeroRequest
      );

      if (!updatedHero) {
        res.status(404).json({
          status: false,
          message: "Hero not found",
          data: {}
        });
        return;
      }

      res.status(200).json({
        status: true,
        message: "Hero updated successfully",
        data: updatedHero
      });
    } catch (err: any) {
      res.status(400).send({
        status: false,
        message: err.message,
        data: {}
      });
    }
  },

  async deleteHero(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { hero } = await HeroService.deleteHero(id);

      if (!hero) {
        res.status(404).json({
          status: false,
          message: "Hero not found",
          data: {}
        });
        return;
      }

      res.status(200).json({
        status: true,
        message: "Hero deleted successfully",
        data: {}
      });
    } catch (err: any) {
      res.status(400).send({
        status: false,
        message: err.message,
        data: {}
      });
    }
  }
};
