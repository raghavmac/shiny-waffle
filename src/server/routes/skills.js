import express from 'express';
import request from 'request';

import config from '../config';

const router = express.Router();
const uri = `${config.apiService}/api/skills`;

router.route('/')
  .get((req, res) => request.get(uri).pipe(res))

  .post((req, res) => request.post(uri, { json: req.body }).pipe(res));

router.route('/:id')
  .delete((req, res) => request.delete(`${uri}/${req.params.id}`).pipe(res));

export default router;