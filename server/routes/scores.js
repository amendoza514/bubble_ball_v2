import express from 'express';
import { getScores, createScore } from '../controllers/scores.js';

const router = express.Router();

//localhost:5000/scores is origin point

router.get('/', getScores);
router.post('/', createScore);

export default router;