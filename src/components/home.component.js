import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

  const[projects, setProjects]=useState([])
  useEffect(()=>{
    loadProject();
  }, [])

  const loadProject=async ()=>{
    const result=await axios.get("project-acceptance-platform-production.up.railway.app/api/test/project/")
    setProjects(result.data);
  }

  const newArr = projects.filter(el => el.accepted !== null)

  return (
      <div className="container-xxl">
        <div className="text-center text-white">
          <div className="bg-image2 rounded">
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Projects</h2>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>

        <div className="container-xxl shadow rounded-lg">
          <header className="py-4">
            <table className="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Company</th>
                <th scope="col">Contacts</th>
              </tr>
              </thead>
              <tbody>
              {
                newArr.map((project,index)=>(
                    <tr>
                      <th>{index+1}</th>
                      <td>{project.title}</td>
                      <td>{project.description}</td>
                      <td>{project.company}</td>
                      <td>{project.contact}</td>
                    </tr>
                ))
              }
              </tbody>
            </table>
          </header>
        </div>
      </div>
  )
  }