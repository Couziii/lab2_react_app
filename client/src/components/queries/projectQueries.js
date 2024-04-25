import axios from "axios";

const port = 3000
const url = `http://localhost:${port}/api/projects`

const getProjects = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        const projects = response.data
        return projects
    } catch (error) {
        console.error(error)
    }
}

export { getProjects }