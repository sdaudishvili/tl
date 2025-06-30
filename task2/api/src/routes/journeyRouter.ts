import { Router } from 'express';
import journeyController from '../controllers/journey.controller';

const router = Router();

router.get('/', journeyController.getJourneys);
router.post('/', journeyController.createJourney);

export default router;
