import Assignmet from "./../models/assignment.js";

export const registerAssignment= async (req, res) => {   
    const {employee_id, project_code, start_date } = req.body;
    console.log(req.body)

    try {
        let assignment = new Assignmet({
            employee_id,
            project_code,
            start_date
        })

        await assignment.save();
        res.status(200).send("Assignmet registered successfully.")

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}


export const showAssignments = async (req, res) => {

    try {
        const assignments = await Assignmet.find()
            .sort({start_date: -1})
            .limit(5);

        res.status(200).json(assignments)

    } catch (error){
        console.error(error)
        res.status(500).send("Server Error")
    }
}
