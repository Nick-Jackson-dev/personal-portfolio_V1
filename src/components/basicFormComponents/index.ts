import BasicFormBody from "./BasicFormBody"

import TextInput from "./TextInput"
// import DateInput from "./DateInput"
import RadioInput from "./RadioInput"
import CheckboxInput from "./CheckboxInput"
import { CSSProperties, ChangeEvent } from "react"

//styles
import "./BasicFormStyles.css"

export { BasicFormBody, TextInput, RadioInput, CheckboxInput }

//types
type BasicInput = {
  type: string
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  horizontal?: boolean
  style?: CSSProperties
}

type TextInputProps = BasicInput & {
  placeholder?: string
  options: {}
}

type CheckboxInputProps = BasicInput & {
  options?: {}
}

type RadioInputProps = BasicInput & {
  options: []
  attributeOptions?: {}
}

type IsInput = CheckboxInputProps | TextInputProps | RadioInputProps

export type { TextInputProps, CheckboxInputProps, RadioInputProps, IsInput }
