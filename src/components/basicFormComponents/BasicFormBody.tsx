import { PropsWithChildren } from "react"
import { TextInput, RadioInput, IsInput } from "./index"
// import Select from "react-select"

type BasicFormBodyProps = {
  formData: IsInput[]
  disabled?: boolean
  readOnly?: boolean
  columns?: number
}

//formData is array of objects that represent inputs
//does not include actual <form> tag, but goes inside of it
export default function BasicFormBody({
  formData,
  disabled = false,
  readOnly = false,
  columns = 1,
  children,
}: PropsWithChildren<BasicFormBodyProps>) {
  disabled = disabled || false
  readOnly = readOnly || false
  const renderInput = (input: any) => {
    switch (input.type) {
      case "text":
      case "number":
      case "email":
      case "password":
        return <TextInput key={input.label} {...input} />
      //   case "select":
      //     return <Select key={input.label} {...input} />
      //   case "date":
      //     return <DateInput key={input.label} {...input} />
      case "radio":
        return <RadioInput key={input.label} {...input} />
      default:
        return <TextInput key={input.label} {...input} />
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridGap: "1rem",
        gridTemplateColumns: `repeat(${columns}, '1fr')`,
        gridAutoFlow: "dense",
        padding: "1rem",
      }}
    >
      {formData.map((input: IsInput, index: number) => renderInput(input))}
      {children}
    </div>
  )
}
