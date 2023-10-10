import Icon from "./basicComponents/Icon"

//icons
import {
  facebookIcon,
  linkedinIcon,
  githubIcon,
} from "../assets/socialIcons/index"

//styles
import "./IconList.css"

type SocialIconListProps = {
  className?: string
  stickToLeft?: boolean
}

export default function SocialIconList({
  className = "",
  stickToLeft = false,
}: SocialIconListProps) {
  const allClasses: string = stickToLeft
    ? `stick-to-left ${className}`
    : className

  return (
    <section className={`icon-list-container ${allClasses} `}>
      {!stickToLeft && (
        <h2 className="icon-list-title">Check Me Out on Social</h2>
      )}
      <div className="icon-list">
        <div className="icon-list-item">
          <a href="https://www.google.com" target="_blank">
            <Icon src={facebookIcon} alt="facebook" handleClick={() => {}} />
          </a>
        </div>

        <div className="icon-list-item">
          <a href="https://www.google.com" target="_blank">
            <Icon src={linkedinIcon} alt="LinkedIn" handleClick={() => {}} />
          </a>
        </div>

        <div className="icon-list-item">
          <a href="https://www.google.com" target="_blank">
            <Icon src={githubIcon} alt="GitHub" handleClick={() => {}} />
          </a>
        </div>
      </div>
    </section>
  )
}
