import express from 'express';
import dotenv from 'dotenv';
import diariesRouter from './routes/diaries';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // for parsing 'req.body' as JSON

const PORT = process.env.PORT || 3000;

app.use('/api/diaries', diariesRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🤖 Server is running on port: ${PORT}`);
});
