import express from 'express';
import { getStats } from '../controllers/stats.js';

const router = express.Router();

//localhost:5000/stats is origin point

router.get('/', getStats);

export default router;