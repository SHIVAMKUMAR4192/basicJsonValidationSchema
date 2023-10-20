import express from 'express'
import { Router, Request, Response } from 'express';

import { jsonValidationMiddleware } from '../middleware/joi';
import { userSchema } from '../validation/jsonValidationSchema';

const router = Router();

router.post('/validate', jsonValidationMiddleware(userSchema), (req, res) => {
    res.send('Data is valid.');
  });

  export default router;
