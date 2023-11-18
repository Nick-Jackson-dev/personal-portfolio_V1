import { CSSProperties, ChangeEvent } from "react"
import { RadioInputProps } from "./index"

export default function RadioInput({
  label,
  name, //groupName
  options,
  onChange,
  value,
  required = false,
  horizontal = false,
  style,
  attributeOptions,
}: RadioInputProps) {
  let appliedStyle = {}
  if (typeof style !== "undefined") appliedStyle = { ...appliedStyle, ...style }
  if (horizontal)
    appliedStyle = {
      ...appliedStyle,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "baseline",
      alignTracks: "baseline",
      maxWidth: "80%",
    }

  const renderOption = (option: { value: string; label: string }) => {
    return (
      <label
        key={option.value}
        style={{
          display: "flex",
          marginRight: "auto",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
        }}
        className="align-left"
      >
        <input
          type="radio"
          checked={option.value === value}
          onChange={onChange}
          value={option.value}
          name={name}
          className="radio-input"
        />
        <span>{option.label}</span>
      </label>
    )
  }

  return (
    <div style={appliedStyle}>
      {label}
      {required ? "*" : ""}:{options.map((option) => renderOption(option))}
    </div>
  )
}
