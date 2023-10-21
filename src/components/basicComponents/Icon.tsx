import { CSSProperties } from "react"
import "./Icon.css"

type IconProps = {
  src: string
  handleClick?: () => void
  size?: "lg" | "med" | "sm" | "xs"
  shape?: "round" | "square" | "rounded-square"
  alt?: string
  dark?: boolean
  clickable?: boolean
  styles?: CSSProperties
}

export default function Icon({
  src,
  handleClick,
  size = "sm",
  shape = "round",
  alt = "icon",
  dark = false,
  clickable = false,
  styles,
}: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      onClick={handleClick}
      className={`icon ${size} ${shape} ${dark ? "dark" : ""} ${
        clickable ? "clickable" : ""
      }`}
    />
  )
}
