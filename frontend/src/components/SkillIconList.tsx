import Icon from "./basicComponents/Icon"

//imported types
import { Skill, allSkills } from "../data/projects"

//icons
//icons
import {
  HTMLIcon,
  CSSIcon,
  reactIcon,
  bootstrapIcon,
  gitIcon,
  githubIcon,
  firebaseIcon,
  jsIcon,
  tsIcon,
  vuejsIcon,
  viteIcon,
} from "../assets/skillIcons/index"

//styles
import "./IconList.css"

const iconPaths = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  React: reactIcon,
  Vue: vuejsIcon,
  Bootstrap: bootstrapIcon,
  JS: jsIcon,
  TS: tsIcon,
  Firebase: firebaseIcon,
  Git: gitIcon,
  Github: githubIcon,
  Vite: viteIcon,
  All: reactIcon, //I need this hear but don't know why
} as const

interface ISkillObj {
  name: Skill
  iconPath: string
}

type SkillIconListProps = {
  className?: string
  skills?: Skill[]
  iconSize?: "xs" | "sm" | "med" | "lg"
  showLabels?: boolean
  title?: string
  border?: boolean
}

export default function SkillIconList({
  className,
  skills = allSkills,
  iconSize = "sm",
  showLabels = false,
  title = "My Skill Tree",
  border = true,
}: SkillIconListProps) {
  const skillsInList: ISkillObj[] = skills.map((s: Skill): ISkillObj => {
    return { name: s, iconPath: iconPaths[`${s}`] }
  })

  return (
    <section
      className={`icon-list-container ${
        !border ? "no-border" : ""
      } ${className}`}
    >
      {title && <h2 className="icon-list-title">{title}</h2>}
      <div className="icon-list">
        {skillsInList.map((skill) => (
          <div className="icon-list-item">
            <Icon src={skill.iconPath} alt={skill.name} size={iconSize} />
            {showLabels && <p>{skill.name}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
