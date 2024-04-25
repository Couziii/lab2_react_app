import React, { useState,useEffect } from "react"
import { getAssignments } from "./queries/assignmentQueries";
import { getProjects } from "./queries/projectQueries";
import { getEmployee } from "./queries/employeeQueries";
import { format } from "date-fns"

const Table = () => {
    const [projectAssignments, setProjectAssignments] = useState([]);
    const [employee, setEmployee] = useState({});
    const [project, setProject] = useState({});


    useEffect(() => {
      const fetchData = async () => {
        console.log("Fetch")
        
        getAssignments()
        .then(assignments => {
          setProjectAssignments(assignments);
          
          assignments.forEach((assignment) => {
            getEmployee(assignment.employee_id).then((employee) => {
              setEmployee((prevInfo) => ({...prevInfo, [assignment.employee_id]: employee,}))
            })
            getProjects(assignment.project_code).then((project) => {
              setProject((prevInfo) => ({...prevInfo, [assignment.project_code]: project,}))
            })
            
          })
        });
      }

      fetchData();
        const interval = setInterval(fetchData, 60000)
        return () => clearInterval(interval);
    }, []);

  

    return (
      <div>
        <h1 className="display-3">Latest Project Assignments</h1>
        <div className="table-responsive-sm">
        <table className="table table-dark table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Project Name</th>
              <th scope="col">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {projectAssignments.map(assignment => (
              <tr key={assignment._id}>
                <td>{assignment.employee_id}</td>
                <td>{employee[assignment.employee_id]?.full_name}</td> 
                <td>{project[assignment.project_code]?.project_name}</td> 
                {/* <td>{assignment.employee_id}</td> */}
                <td>{format(assignment.start_date, 'yyyy-MM-dd')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          
    );
};


export default Table