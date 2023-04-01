import express from 'express';
import diariesRouter from './routes/diaries';

const app = express();

// Middleware
app.use(express.json()); // for parsing 'req.body' as JSON

const PORT = 3000;

app.use('/api/diaries', diariesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
