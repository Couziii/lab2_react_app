import axios from "axios";

const port = 3000
const url = `http://localhost:${port}/api/employees/`

const getEmployee = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        const employees = response.data
        return employees
    } catch (error) {
        console.error(error)
    }
}

export { getEmployee }