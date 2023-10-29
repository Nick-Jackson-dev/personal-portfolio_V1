import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"

import RedirectPage from "../RedirectPage"
import SingleColumn from "../../layouts/SingleColumn"
import { Skill, projects } from "../../data/projects"
import ImageSlider from "../../components/ImageSlider"
import SkillIconList from "../../components/SkillIconList"
import { ReactNode } from "react"

export default function ProjectPage() {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const project = projects.filter((proj) => proj.id === projectId)[0]

  //   redirect the user if the project doesn't exist
  if (typeof project === "undefined") {
    return (
      <RedirectPage to="/projects">
        <p className="error">This project doesn't exist.</p>
      </RedirectPage>
    )
  }

  return (
    <main className="project-page">
      <h1 className="page-title">{project.name}</h1>
      <SingleColumn textAlign="left" className="page-wrapper">
        <p className="project-page-back-button">
          <Link to="/projects">{"<"} back to projects</Link>
        </p>

        {/* slideshow */}
        <ImageSlider images={project.screenshots} />

        <div className="project-information">
          <ProjectDescription description={project.description} />
          <SkillsAndLink
            skills={project.skills}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        </div>
      </SingleColumn>
    </main>
  )
}

type ProjectDescriptionProps = {
  description: ReactNode[]
}
const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <section className="project-description">
      <h2>What is it?</h2>
      {description.map((node) => node)}
    </section>
  )
}

type SkillsAndLinkProps = {
  skills: Skill[]
  githubLink?: string
  liveLink?: string
}

const SkillsAndLink = ({
  skills,
  githubLink = "",
  liveLink = "",
}: SkillsAndLinkProps) => {
  return (
    <section className="skills-and-links">
      <div className="project-skills">
        <SkillIconList
          showLabels={true}
          skills={skills}
          title="Skills Used"
          border={false}
        />
      </div>
      <div className="project-links">
        {githubLink && (
          <p>
            View on{" "}
            <a href={githubLink} target="_blank">
              GitHub
            </a>
          </p>
        )}
        {liveLink && (
          <p>
            Check out the project <a href={liveLink}>live</a>
          </p>
        )}
      </div>
    </section>
  )
}
