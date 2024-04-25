import { Router } from "express";
import { registerProject, getProject } from "../controller/projects.js";


const router = Router();

router.post('/', registerProject)
router.get('/:id', getProject)

export default router