import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

// layouts
import SingleColumn from "../../layouts/SingleColumn"
import SkillIconList from "../../components/SkillIconList"

//data
import { projects, IProject, Skill } from "../../data/projects"

//styles
import "./projects.css"
import ListFilter from "../../components/basicComponents/ListFilter"

export default function ProjectsPage() {
  const navigate = useNavigate()
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects)

  const [searchParams, setSearchParams] = useSearchParams({ skill: "" })
  const currentSkill: Skill = (searchParams.get("skill") as Skill) || "All"

  const changeFilter = (filter: string) => {
    setSearchParams(
      (prev) => {
        prev.set("skill", getType(filter))
        return prev
      },
      { replace: true }
    )
  }

  useEffect(() => {
    let displayedProjects: IProject[] = projects.filter((project) => {
      if (currentSkill !== "All") {
        return project.skills.includes(currentSkill)
      }
      return projects
    })
    setFilteredProjects(displayedProjects)
  }, [currentSkill])

  return (
    <main className="projects-page">
      <SingleColumn className="page-wrapper">
        <article>
          <header className="section-title">My Projects</header>
          <div className="filter">
            <ListFilter
              changeFilter={changeFilter}
              filterOptions={[
                "All",
                "React",
                "Typescript",
                "Javascript",
                "Bootstrap",
                "Firebase",
                "Vue",
                "Git",
                "Github",
              ]}
              currentFilter={currentSkill}
            />
          </div>

          <section className="project-list">
            {filteredProjects.map((project, i: number) => (
              <div
                tabIndex={0}
                className={`project-list-item ${i % 2 !== 0 ? "reverse" : ""}`}
                key={project.id}
                onClick={() => navigate(`${project.id}`)}
              >
                <div className="thumbnail">
                  <img
                    src={project.thumbnail.url}
                    alt={project.thumbnail.alt}
                  />
                </div>

                <div className="project-details">
                  <h3 className="project-title">{project.name}</h3>
                  <SkillIconList
                    skills={project.skills}
                    iconSize="xs"
                    showLabels={false}
                    title=""
                    className="project-skills"
                  />
                  <div className="project-description">
                    {project.shortDescription.map((p) => (
                      <p>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </article>
        <SkillIconList />
      </SingleColumn>
    </main>
  )
}

function getType(type: string) {
  switch (type) {
    case "all":
      return ""
    case "Typescript":
      return "TS"
    case "Javascript":
      return "JS"
    default:
      return type
  }
}
