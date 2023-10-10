import Icon from "./basicComponents/Icon"

//imported types
import { Skill, allSkills } from "../data/projects"

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

const iconPaths = {
  React: reactIcon,
  Vue: vuejsIcon,
  Bootstrap: bootstrapIcon,
  JS: jsIcon,
  TS: tsIcon,
  Firebase: firebaseIcon,
  Git: gitIcon,
  Github: githubIcon,
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
}

export default function SkillIconList({
  className,
  skills = allSkills,
  iconSize = "sm",
  showLabels = false,
}: SkillIconListProps) {
  const skillsInList: ISkillObj[] = skills.map((s: Skill): ISkillObj => {
    return { name: s, iconPath: iconPaths[`${s}`] }
  })

  return (
    <section className={`icon-list-container ${className}`}>
      <h2 className="icon-list-title">My Skill Tree</h2>
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
