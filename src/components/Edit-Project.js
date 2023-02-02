import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom"

export default function EditProject(){

    let navigate = useNavigate()

    const {id}=useParams()

    const [project, setProject] = useState({
        title:"",
        description:"",
        companyName:"",
        contact:""
    })

    const{title, description, companyName, contact}=project;

    const[projects, setProjects]=useState([])
    useEffect(()=>{
        loadProject();
    }, [])

    const loadProject2=async ()=>{
        const result=await axios.get("https://project-acceptance-platform-production.up.railway.app/api/test/project/")
        setProjects(result.data);
    }

    const onInputChange=(e) => {
        setProject({...project,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadProject()
    },[])

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`https://project-acceptance-platform-production.up.railway.app/api/test/project/update/${id}`,project)
        navigate("/")
    };

    const loadProject = async ()=>{
        const result=await axios.get(`https://project-acceptance-platform-production.up.railway.app/api/test/project/update/${id}`)
        setProject(result.data)
    }

    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Project</h2>

                <form onSubmit = {(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type={"text"}
                               className="form-control"
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
                        <label htmlFor="CompanyName" className="form-label">Company</label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Project Company"
                            name="companyName"
                            value={companyName}
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
    </div>
}