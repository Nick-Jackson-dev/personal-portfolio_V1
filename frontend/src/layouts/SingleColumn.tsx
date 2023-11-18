import { PropsWithChildren, CSSProperties } from "react"

type SingleColumnProps = {
  textAlign?: "center" | "left" | "right"
  containerStyles?: CSSProperties
  className?: string
}

export default function SingleColumn({
  children,
  textAlign = "center",
  containerStyles,
  className,
}: PropsWithChildren<SingleColumnProps>) {
  const allStyles: CSSProperties = { textAlign, ...containerStyles }

  return (
    <div style={allStyles} className={className}>
      {children}
    </div>
  )
}
