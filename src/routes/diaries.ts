import express from 'express';
import * as diariesServices from '../services/diaryServices';

const router = express.Router();

/**
 * GET /api/diaries - Returns all diaries
 */
router.get('/', (_req, res) => {
  res.send(diariesServices.getNonSensitiveEntries()).status(200);
});

/**
 * GET /api/diaries/:id - Returns a single diary entry
 * @param id
 */
router.get('/:id', (req, res) => {
  const diary = diariesServices.getEntry(Number(req.params.id));
  if (diary) {
    res.send(diary).status(200);
  } else {
    res.sendStatus(404);
  }
});

export default router;
