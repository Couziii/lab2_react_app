import Project from "../models/project.js";

export const registerProject = async (req, res) => {   
    const { project_code, project_name, project_description } = req.body;
    console.log(req.body)

    try {
        let project = new Project({
            project_code,
            project_name,
            project_description
        })

        await project.save();
        res.status(200).send("Project registered successfully.")

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}

export const getProject = async (req, res) => {
    try {
        const employee = await Project.findOne({project_code: req.params.id})
        res.json(employee)
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error")
    }
}