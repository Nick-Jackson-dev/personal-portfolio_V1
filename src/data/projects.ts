//screenshots
import { reactIcon } from "../assets/skillIcons"
import testProject1 from "../assets/projects/test-project/test-app_1.png"
import testProject2 from "../assets/projects/test-project/test-app_2.png"
import testProject3 from "../assets/projects/test-project/test-app_3.png"

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
  thumbnail: { url: string; alt: string }
  screenshots: { url: string; alt: string }[]
  githubLink?: string
  liveLink?: string
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
    thumbnail: {
      url: testProject1,
      alt: "Thumbnail screenshot for this project",
    },
    screenshots: [
      { url: testProject1, alt: "this is a screenshot" },
      { url: testProject2, alt: "this is a screenshot" },
      { url: testProject3, alt: "this is a screenshot" },
    ],
    githubLink:
      "https://github.com/Nick-Jackson-dev/file-storage-reactjs-project",
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
    thumbnail: { url: reactIcon, alt: "thumbnail" },
    screenshots: [
      { url: reactIcon, alt: "this is a screenshot of the second project" },
    ],
  },
]

export { projects, allSkills }

export type { Skill, IProject }
