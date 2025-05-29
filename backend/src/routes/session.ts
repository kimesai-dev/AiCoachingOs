import { Router } from 'express';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, (req, res) => {
  // Fetch sessions
  res.json([]);
});

router.post('/', authenticate, (req, res) => {
  // Create a coaching session
  res.status(201).json({});
});

export default router;
