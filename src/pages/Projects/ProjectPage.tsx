import { useParams } from "react-router"

export default function ProjectPage() {
  const { projectName } = useParams()

  return <div>{projectName}</div>
}
