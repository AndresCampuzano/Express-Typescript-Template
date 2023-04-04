import express from 'express';
import * as diariesServices from '../services/diary.service';

const router = express.Router();

/**
 * GET /api/diaries - Returns all diaries
 */
router.get('/', async (_req, res) => {
  try {
    const diaries = await diariesServices.getNonSensitiveEntries();
    res.send(diaries).status(200);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

/**
 * GET /api/diaries/:id - Returns a single diary entry
 */
router.get('/:id', async (req, res) => {
  try {
    const diary = await diariesServices.getEntry(req.params.id);
    if (diary) {
      res.send(diary).status(200);
    } else {
      res.sendStatus(404);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;
