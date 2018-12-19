import express from 'express';
import request from 'request';

import config from '../config';

const router = express.Router();
const uri = `${config.apiService}/api/skills`;

router.route('/')
  .get((req, res) => request.get(uri).pipe(res));

export default router;