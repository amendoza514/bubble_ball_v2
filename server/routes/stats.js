import express from 'express';
import { getStats, createStat, updateStat, deleteStat } from '../controllers/stats.js';

const router = express.Router();

//localhost:5000/stats is origin point

router.get('/', getStats);
router.post('/', createStat);
router.patch('/:id', updateStat);
router.delete('/:id', deleteStat);

export default router;