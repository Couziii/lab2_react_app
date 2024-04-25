import express from "express"
import dotenv from "dotenv"
import cors from "cors";

import connectDB from "./db/connection.js"
import employeesRoutes from "./routes/employees.js"
import projectsRoutes from "./routes/projects.js"
import assignmentsRoutes from "./routes/assignments.js"

// Load env variables
dotenv.config()

// Initialize App
const app = express();

// Connect to Database
connectDB();

// Initialize Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send('API running');
});

app.use('/api/employees', employeesRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/project_assignments', assignmentsRoutes)


// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
});