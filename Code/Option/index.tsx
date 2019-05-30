import React, { FunctionComponent, useState, useRef, useEffect } from "react"
import useToggle from "../useToggle"

import CheckboxStyle from "./CheckboxStyle.css"
import TextStyles from "./TextStyles.css"

const Checkbox: FunctionComponent<{
  isOn: boolean
  default: string
  color: "Green" | "Blue" | "Red"
  onClick: () => void
}> = props => {
  const [text, setText] = useState(props.default)
  const [isEditable, toggleEdit] = useToggle(false)
  const inputRef = useRef(null)

  useEffect(() => {
    // @ts-ignore [Do not know why]
    inputRef.current && inputRef.current.focus && inputRef.current.focus()
  })

  const CostumeCheckbox = (
    <label className={CheckboxStyle.toggle + " " + CheckboxStyle[props.color]}>
      <input
        type="checkbox"
        checked={props.isOn}
        onChange={props.onClick}
        className={CheckboxStyle.toggleInput}
      />
      <span className={CheckboxStyle.toggleLabel} />
    </label>
  )

  const showText = (
    <span
      className={TextStyles.Text}
      style={{ fontWeight: props.isOn ? 400 : 300 }}
      onDoubleClick={toggleEdit}
    >
      {text}
    </span>
  )

  const editText = (
    <input
      ref={inputRef}
      onFocus={e => e.target.select()}
      className={TextStyles.Text + " " + TextStyles.Input}
      value={text}
      onKeyDown={e => e.key === "Enter" && toggleEdit()}
      onBlur={toggleEdit}
      onChange={e => {
        setText(e.target.value)
      }}
    />
  )

  return (
    <div className={TextStyles.Container}>
      <span />
      {CostumeCheckbox}
      {isEditable ? editText : showText}
      <span />
    </div>
  )
}

export default Checkbox
