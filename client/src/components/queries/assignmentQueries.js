import axios from "axios";

const port = 3000
const url = `http://localhost:${port}/api/project_assignments`

const getAssignments = async () => {
    try {
        const response = await axios.get(url);
        const assignments = response.data
        return assignments
    } catch (error) {
        console.error(error)
    }
}

export { getAssignments }