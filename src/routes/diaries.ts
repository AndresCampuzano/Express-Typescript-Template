import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Fetching all entry diaries').status(200);
});

router.post('/', (_req, res) => {
  res.send('Saving a diary').status(200);
});

export default router;
