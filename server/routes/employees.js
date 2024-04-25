import { Router } from "express";
import { registerEmployee } from "../controller/employees.js";
import { getEmployee } from "../controller/employees.js";
const router = Router();

router.post('/', registerEmployee)
router.get('/:id', getEmployee)

export default router