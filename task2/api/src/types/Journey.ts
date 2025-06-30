export type Journey = {
  id: string;
  origin: string;
  destination: string;
  duration: number; // in minutes
};

export type JourneyRequest = {
  origin: string;
  destination: string;
};
