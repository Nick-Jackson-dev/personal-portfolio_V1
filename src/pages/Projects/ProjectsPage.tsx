import { useState } from "react"
import { useNavigate } from "react-router-dom"

// layouts
import SingleColumn from "../../layouts/SingleColumn"
import SkillIconList from "../../components/SkillIconList"

//styles
import "./projects.css"

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <SingleColumn className="page-wrapper">
        <article>
          <header className="section-title">My Projects</header>
          <div className="filter">
            filter by: I am going to have a compnent for this
          </div>

          <section className="project-list">
            {/* TODO: have list of projects in json and output here using ProjectListItem component. */}

            <div className="project-list-item">
              <div className="thumbnail">Image here</div>

              <div className="project-details">
                <h3 className="project-title">Document Storage</h3>
                <div className="project-skills">list here</div>
                <div className="project-description">
                  <p>sdhjfbsdf</p>
                  <p>
                    ksjdhbfksjdbfskjbf sdjklfb nsdjkfb sdjkfb sdkf bsdf kbjsd
                  </p>
                </div>
              </div>
            </div>

            <div className="project-list-item">
              <div className="thumbnail">Image here</div>

              <div className="project-details">
                <h3 className="project-title">Document Storage</h3>
                <div className="project-skills">list here</div>
                <div className="project-description">
                  <p>sdhjfbsdf</p>
                  <p>
                    ksjdhbfksjdbfskjbf sdjklfb nsdjkfb sdjkfb sdkf bsdf kbjsd
                  </p>
                </div>
              </div>
            </div>

            <div className="project-list-item">
              <div className="thumbnail">Image here</div>

              <div className="project-details">
                <h3 className="project-title">Document Storage</h3>
                <div className="project-skills">list here</div>
                <div className="project-description">
                  <p>sdhjfbsdf</p>
                  <p>
                    ksjdhbfksjdbfskjbf sdjklfb nsdjkfb sdjkfb sdkf bsdf kbjsd
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
        <SkillIconList />
      </SingleColumn>
    </main>
  )
}
