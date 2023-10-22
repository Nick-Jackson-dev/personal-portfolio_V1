import { useNavigate, useParams } from "react-router"
import { projects } from "../../data/projects"
import useTimeout from "../../hooks/useTimeout"
import { useState } from "react"
import RedirectPage from "../RedirectPage"

export default function ProjectPage() {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const thisProject = projects.filter((proj) => proj.id === projectId)[0]

  //   this should be a redirect
  if (typeof thisProject === "undefined") {
    return <RedirectPage to="/projects" />
  }

  return (
    <div>
      {projectId}
      <p>{thisProject.name}</p>
    </div>
  )
}
