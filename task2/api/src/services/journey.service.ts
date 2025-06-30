import { createJourney } from '../helpers/journey';
import { Journey, JourneyRequest } from '../types/Journey';
import fs from 'fs/promises';

class JourneyService {
  async createJourney(journeyRequest: JourneyRequest): Promise<Journey> {
    const journey = createJourney(journeyRequest);
    await fs.appendFile('journeys.txt', JSON.stringify(journey) + '\n');
    return journey;
  }

  async getJourneys(): Promise<Journey[]> {
    try {
      const data = await fs.readFile('journeys.txt', 'utf8');
      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.length > 0);
      return lines.map((line) => JSON.parse(line));
    } catch (error) {
      return [];
    }
  }
}

export default new JourneyService();
