import mongoose from "mongoose";
import { Schema } from "mongoose";
import Employee from "./employee.js";
import Project from "./project.js";


const AssignmentSchema = new Schema({
    employee_id: {
        type: Number,
        required: true,
        ref: 'Employee'
    },
    project_code: {
        type: Number,
        required: true,
        ref: 'Project'
    },
    start_date: {
        type: Date,
        required: true
    }

})


var Assignment = mongoose.model('assignment', AssignmentSchema);

export default Assignment;