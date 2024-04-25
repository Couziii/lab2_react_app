import Employee from "./../models/employee.js";

export const registerEmployee = async (req, res) => {   
    const {employee_id, full_name, email, password } = req.body;
    console.log(req.body)

    try {
        let employee = new Employee({
            employee_id,
            full_name,
            email,
            password
        })

        await employee.save();
        res.status(200).send("Employee registered successfully.")

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error POST")
    }
}

export const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({employee_id: req.params.id})
        res.json(employee)
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error")
    }
}

