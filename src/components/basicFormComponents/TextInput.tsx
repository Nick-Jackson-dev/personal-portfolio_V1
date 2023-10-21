import { CSSProperties, ChangeEvent } from "react"
import { TextInputProps } from "./index"

export default function TextInput({
  label,
  value,
  name,
  onChange,
  placeholder,
  type = "text",
  required = false,
  horizontal = false,
  style,
  options,
}: TextInputProps) {
  type = type || "text"
  return (
    <label
      style={
        horizontal
          ? {
              width: "90%",
              display: "flex",
              gap: "1rem .5rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }
          : {}
      }
    >
      <span style={horizontal ? { marginRight: "1rem", width: "20%" } : {}}>
        {label}
        {required ? "*" : ""}:{" "}
      </span>
      <input
        {...options}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="form-control"
        placeholder={placeholder}
        required={required}
        style={{ maxWidth: "400px" }}
      />
    </label>
  )
}
