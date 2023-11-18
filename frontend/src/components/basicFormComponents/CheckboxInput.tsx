import { useState, ChangeEvent } from "react"
import { CheckboxInputProps } from "./index"

export default function CheckboxInput({
  label,
  value,
  name,
  onChange,
  required = false,
  horizontal = false,
  options,
}: CheckboxInputProps) {
  const [checked, setChecked] = useState(false)
  return (
    <label
      style={
        horizontal
          ? {
              display: "flex",
              gap: "1rem .5rem",
              justifyContent: "flex-start",
              gridTemplateColumns: "auto minmax(auto, 25px)",
              flexWrap: "wrap",
            }
          : {}
      }
    >
      <span style={horizontal ? { marginRight: "1rem" } : {}}>
        {label}
        {required ? "*" : ""}:{" "}
      </span>
      <input
        {...options}
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        className="clickable"
        onChange={(e) => {
          setChecked((prevChecked) => !prevChecked)
          onChange(e)
        }}
        required={required || false}
        style={{ maxWidth: "25px", height: "25px" }}
      />
    </label>
  )
}
