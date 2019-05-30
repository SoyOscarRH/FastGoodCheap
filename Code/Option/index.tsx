import React, { FunctionComponent, useState, useRef, useEffect } from "react"
import useToggle from "../useToggle"

import CheckboxStyle from "./CheckboxStyle.css"
import TextStyles from "./TextStyles.css"

const Checkbox: FunctionComponent<{
  isOn: boolean
  defaultText: string
  color: "Green" | "Blue" | "Red"
  onClick: () => void
  onTextChange: (data: string) => void
}> = ({ isOn, defaultText, color, onClick, onTextChange }) => {
  const [text, setText] = useState(defaultText)
  const [isEditable, toggleEdit] = useToggle(false)
  const inputRef = useRef(null)

  useEffect(() => {
    // @ts-ignore [Do not know why]
    inputRef.current && inputRef.current.focus && inputRef.current.focus()
  })

  useEffect(() => {
    onTextChange(text)
  }, [onTextChange, text])

  const CostumeCheckbox = (
    <label className={CheckboxStyle.toggle + " " + CheckboxStyle[color]}>
      <input
        type="checkbox"
        checked={isOn}
        onChange={onClick}
        className={CheckboxStyle.toggleInput}
      />
      <span className={CheckboxStyle.toggleLabel} />
    </label>
  )

  const showText = (
    <span
      className={TextStyles.Text}
      style={{ fontWeight: isOn ? 500 : 300 }}
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
