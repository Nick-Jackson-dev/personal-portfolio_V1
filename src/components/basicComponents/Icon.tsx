import "./Icon.css"

type IconProps = {
  src: string
  handleClick?: () => void
  size?: "lg" | "med" | "sm" | "xs"
  shape?: "round" | "square" | "rounded-square"
  alt?: string
  dark?: boolean
}

export default function Icon({
  src,
  handleClick,
  size = "sm",
  shape = "round",
  alt = "icon",
  dark = false,
}: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={handleClick}
      className={`icon ${size} ${shape} ${dark ? "dark" : ""}`}
    />
  )
}
