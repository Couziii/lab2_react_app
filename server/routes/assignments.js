import { Router } from "express";
import { registerAssignment, showAssignments } from "../controller/assignments.js";

const router = Router();

router.post('/', registerAssignment)
router.get('/', showAssignments)


export default router