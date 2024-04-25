import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProjectSchema = new Schema({
    project_code: {
        type: Number,
        required: true,
        unique: true
    },
    project_name: {
        type: String
    },
    project_description: {
        type: String,
        required: true,
        unique: true
    }

})


var Project = mongoose.model('project', ProjectSchema);

export default Project;