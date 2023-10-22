//screenshots
import { reactIcon } from "../assets/skillIcons"

type Skill =
  | "React"
  | "Vue"
  | "Bootstrap"
  | "JS"
  | "TS"
  | "Firebase"
  | "Git"
  | "Github"
  | "All"

const allSkills: Skill[] = [
  "React",
  "Vue",
  "Bootstrap",
  "JS",
  "TS",
  "Firebase",
  "Git",
  "Github",
]

interface IProject {
  name: string
  id: string
  skills: Skill[]
  shortDescription: string[]
  description: string[]
  thumbnail: string
  screenshots: string[]
  githubLink?: string
}

const projects: IProject[] = [
  {
    name: "Document Storage",
    id: "1",
    skills: ["React", "Firebase", "JS"],
    shortDescription: [
      "this is a short, 2 paragraph description",
      "this is the second paragraph",
    ],
    description: [
      "this is the actual description",
      "paragraph 2",
      "paragraph 3",
    ],
    thumbnail: reactIcon,
    screenshots: [reactIcon],
  },
  {
    name: "B2B software",
    id: "2",
    skills: ["TS", "Bootstrap"],
    shortDescription: [
      "this is a short, 2 paragraph descriptionhis is a short, 2 paragraph descriptionhis is a short, 2 paragraph descriptionhis is a short, 2 paragraph description",
      "this is the second paragraph",
    ],
    description: [
      "this is the actual description",
      "paragraph 2",
      "paragraph 3",
    ],
    thumbnail: reactIcon,
    screenshots: [reactIcon],
  },
]

export { projects, allSkills }

export type { Skill, IProject }
