import { PropsWithChildren } from "react"

type FormWrapperProps = { title?: string }

export default function FormWrapper({
  title,
  children,
}: PropsWithChildren<FormWrapperProps>) {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{title}</h2>
      <div
        className="form-wrapper"
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  )
}
