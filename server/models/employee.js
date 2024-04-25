import mongoose from "mongoose";
import { Schema } from "mongoose";

const EmployeeSchema = new Schema({
    employee_id: {
        type: Number,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}) 


var Employee = mongoose.model('employee', EmployeeSchema);

export default Employee;