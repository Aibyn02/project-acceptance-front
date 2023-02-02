import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom"

export default function AcceptPage() {

    let navigate = useNavigate()

    const {id} = useParams()

    const [project, setProject] = useState({
        accepted: "15"
    })

    const {accepted} = project;

    const onInputChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadProject()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`project-acceptance-platform-production.up.railway.app/api/test/project/update/${id}`, project)
        navigate("/")
    };

    const loadProject = async () => {
        const result = await axios.get(`project-acceptance-platform-production.up.railway.app/api/test/project/update/${id}`)
        setProject(result.data)
    }

    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Accept Project</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-success"
                                onChange={(e) => onInputChange(e)}>Accept
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/requests">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
}