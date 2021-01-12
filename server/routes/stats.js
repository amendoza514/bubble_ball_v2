import express from 'express';
import { getStats, createStat } from '../controllers/stats.js';

const router = express.Router();

//localhost:5000/stats is origin point

router.get('/', getStats);
router.post('/', createStat);

export default router;