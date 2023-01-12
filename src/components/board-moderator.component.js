import React, { useState, useEffect } from "react";
import axios from "axios";
import{Link, useParams} from "react-router-dom";

export default function BoardModerator() {

    const[projects, setProjects] = useState([])

    useEffect(()=>{
        loadProject();
    }, [])

    const {id}=useParams()

    const loadProject=async ()=>{
        const result=await axios.get("https://project-acceptance-platform-production.up.railway.app/api/test/project/")
        setProjects(result.data);
    }

    const deleteProject=async (id)=>{
        await axios.delete(`https://project-acceptance-platform-production.up.railway.app/api/test/project/delete/${id}`)
        loadProject();
    }

    return(
        <div className='container'>
            <div className="py-4">
                <table className="table table-striped shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Company</th>
                        <th scope="col">Contacts</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        projects.map((project,index)=>(
                            <tr>
                                <th>{index+1}</th>
                                <td>{project.title}</td>
                                <td>{project.description}</td>
                                <td>{project.company}</td>
                                <td>{project.contact}</td>
                                <td>
                                    <Link className="btn btn-outline-primary" to={`/edit-project/${project.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2" onClick={()=>deleteProject(project.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
  }


