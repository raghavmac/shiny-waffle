import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => res.json({ status: 'ok' }));

export default router;
