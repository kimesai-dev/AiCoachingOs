import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRoutes from './routes/client';
import sessionRoutes from './routes/session';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clients', clientRoutes);
app.use('/api/sessions', sessionRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
