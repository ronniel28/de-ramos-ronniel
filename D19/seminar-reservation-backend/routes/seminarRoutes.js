import express from "express";
import { getSeminars, createSeminar, updateSeminar, deleteSeminar, getSeminarDetails } from "../controllers/seminarController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get('/', getSeminars);
router.get('/:id', getSeminarDetails);
router.post('/', authMiddleware, adminMiddleware, createSeminar);
router.put('/:id', authMiddleware, adminMiddleware, updateSeminar);
router.delete('/:id', authMiddleware, adminMiddleware, deleteSeminar);


export default router;