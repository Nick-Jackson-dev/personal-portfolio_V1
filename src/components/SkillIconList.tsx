import Icon from "./basicComponents/Icon"

//icons
//icons
import {
  reactIcon,
  bootstrapIcon,
  gitIcon,
  githubIcon,
  firebaseIcon,
  jsIcon,
  tsIcon,
  vuejsIcon,
} from "../assets/skillIcons/index"

//styles
import "./IconList.css"

type SkillIconListProps = {
  className?: string
}

//TODO: Want the skills included to be dynamic so that the component can be used in Projects as well.

export default function SkillIconList({ className }: SkillIconListProps) {
  return (
    <section className={`icon-list-container ${className}`}>
      <h2 className="icon-list-title">My Skill Tree</h2>
      <div className="icon-list">
        <div className="icon-list-item">
          <Icon src={reactIcon} alt="React" size="med" />
          <p>React</p>
        </div>

        <div className="icon-list-item">
          <Icon src={vuejsIcon} alt="VueJS" size="med" />
          <p>VueJS</p>
        </div>

        <div className="icon-list-item">
          <Icon src={jsIcon} alt="Javascript" size="med" />
          <p>Javascript</p>
        </div>

        <div className="icon-list-item">
          <Icon src={tsIcon} alt="TypeScript" size="med" />
          <p>Typescript</p>
        </div>

        <div className="icon-list-item">
          <Icon src={bootstrapIcon} alt="Bootstrap" size="med" />
          <p>Bootstrap</p>
        </div>

        <div className="icon-list-item">
          <Icon src={gitIcon} alt="Git" size="med" />
          <p>Git</p>
        </div>

        <div className="icon-list-item">
          <Icon src={githubIcon} alt="Github" size="med" />
          <p>Github</p>
        </div>

        <div className="icon-list-item">
          <Icon src={firebaseIcon} alt="Firebase" size="med" />
          <p>Firebase</p>
        </div>
      </div>
    </section>
  )
}
