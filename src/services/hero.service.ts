import { Hero } from "../models/hero.model";

export interface TCreateHeroRequest {
  name: string;
  role: string;
  description: string;
  coverImage: string;
  skills: any[];
  tags: string[];
}

export interface TUpdateHeroRequest {
  name?: string;
  role?: string;
  description?: string;
  coverImage?: string;
  skills?: any[];
  tags?: string[];
}

export const HeroService = {
  async getAllHeroes() {
    try {
      const heroes = await Hero.find();
      return heroes;
    } catch (err) {
      throw err;
    }
  },

  async getHeroById(id: string) {
    try {
      const hero = await Hero.findById(id);
      return hero;
    } catch (err) {
      throw err;
    }
  },

  async createHero(hero: TCreateHeroRequest) {
    try {
      const newHero = new Hero(hero);
      const savedHero = await newHero.save();
      return savedHero;
    } catch (err) {
      throw err;
    }
  },

  async updateHero(id: string, hero: TUpdateHeroRequest) {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(id, hero, { new: true });
      return updatedHero;
    } catch (err) {
      throw err;
    }
  },

  async deleteHero(id: string) {
    try {
      const hero = await Hero.findByIdAndDelete(id);
      return { hero };
    } catch (err) {
      throw err;
    }
  }
};
