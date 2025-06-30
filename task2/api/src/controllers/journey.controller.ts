import { Request, Response } from "express";
import { createJourney } from "../helpers/journey";
import journeyService from "../services/journey.service";
import { JourneyRequest } from "../types/Journey";

class JourneyController {
  async createJourney(req: Request, res: Response) {
    try {
      const journey = await journeyService.createJourney(
        req.body as JourneyRequest
      );
      res.status(201).json(journey);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getJourneys(req: Request, res: Response) {
    try {
      const journeys = await journeyService.getJourneys();
      res.json(journeys);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new JourneyController();
