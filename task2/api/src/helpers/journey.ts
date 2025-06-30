import { Journey, JourneyRequest } from '../types/Journey';
import { v4 as uuidv4 } from 'uuid';

const getRandomDuration = () => {
  const minDuration = 100;
  const maxDuration = 720;

  const randomDuration =
    Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
  return Math.floor(randomDuration / 10) * 10;
};

const trimString = (str: string) => {
  return str
    .trim()
    .split('')
    .filter((char) => char.match(/[a-zA-Z]/))
    .join('');
};

export const createJourney = (journeyRequest: JourneyRequest): Journey => {
  return {
    id: uuidv4(),
    origin: trimString(journeyRequest.origin),
    destination: trimString(journeyRequest.destination),
    duration: getRandomDuration(),
  };
};
