import express from 'express';
import diariesRouter from './routes/diaries';
import { connectToDatabase } from './mongo/database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware for parsing the body of requests
app.use(express.json());

connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.use('/api/diaries', diariesRouter);
    app.listen(PORT, () => {
      console.log(`🤖 Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed', error);
    process.exit();
  });

export default app;
