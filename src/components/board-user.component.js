import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function BoardUser() {

  let navigate = useNavigate()

  const [project, setProject] = useState({
    title:"",
    description:"",
    company:"",
    contact:""
  })

  const{title, description, company, contact}=project;

  const onInputChange=(e) => {
    setProject({...project,[e.target.name]:e.target.value})
  };

  const onSubmit =async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/test/project/create",project)
    navigate("/")
  };

  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Project</h2>

        <form onSubmit = {(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">Title</label>
            <input type={"text"}
                   className="form-control"
                   placeholder="Enter Project Title"
                   name="title"
                   value={title}
                   onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <input
                type={"text"}
                className="form-control"
                placeholder="Enter Project Description"
                name="description"
                value={description}
                onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Company" className="form-label">Company</label>
            <input
                type={"text"}
                className="form-control"
                placeholder="Enter Project Company"
                name="company"
                value={company}
                onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Contact" className="form-label">Contacts</label>
            <input
                type={"text"}
                className="form-control"
                placeholder="Enter Project Contacts"
                name="contact"
                value={contact}
                onChange={(e)=>onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-success">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </form>
      </div>
    </div>
    <br/>
  </div>
}






