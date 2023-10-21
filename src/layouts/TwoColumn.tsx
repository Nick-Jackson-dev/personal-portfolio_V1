import {
  PropsWithChildren,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react"
import { JsxElement } from "typescript"

type TwoColumnProps = {
  leftSideJSX: ReactNode
  rightSideJSX: ReactNode
  containerStyles?: CSSProperties
  containerClassName?: string
  leftClassName?: string
  leftStyles?: CSSProperties
  rightClassName?: string
  rightStyles?: CSSProperties
}

export default function TwoColumn({
  leftSideJSX,
  rightSideJSX,
  containerStyles,
  containerClassName,
  leftClassName,
  leftStyles,
  rightClassName,
  rightStyles,
}: TwoColumnProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4em",
        margin: "auto",
        padding: "1em",
        ...containerStyles,
      }}
      className={containerClassName}
    >
      <div
        className={`left-column ${leftClassName}`}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          ...leftStyles,
        }}
      >
        {leftSideJSX}
      </div>

      <div
        className={`right-column ${rightClassName}`}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          ...rightStyles,
        }}
      >
        {rightSideJSX}
      </div>
    </div>
  )
}
