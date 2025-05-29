import { Router } from 'express';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, (req, res) => {
  // Fetch clients from DB
  res.json([]);
});

router.post('/', authenticate, (req, res) => {
  // Create client in DB
  res.status(201).json({});
});

export default router;
