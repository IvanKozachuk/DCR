import express from 'express';

import { getDCRs, createDCR } from '../controllers/dcr.js';
// import auth from '../middleware/auth.js';

const router = express.Router();

// router.get('/', getDCRs);
// router.post('/', createDCR);

router.get('/', getDCRs);
router.post('/', createDCR);

export default router;