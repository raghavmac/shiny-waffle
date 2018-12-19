import express from 'express';

import healthRoutes from './health';
import skillsRoutes from './skills';

const router = express.Router();

router.use('/health', healthRoutes);
router.use('/skills', skillsRoutes);

export default router;