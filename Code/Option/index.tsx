import React, { FunctionComponent, useState, useRef, useEffect } from "react"
import useToggle from "../useToggle"

import CheckboxStyle from "./CheckboxStyle.css"
import TextStyles from "./TextStyles.css"

const Checkbox: FunctionComponent<{ isOn: boolean, default: string }> = props => {
  const [text, setText] = useState(props.default)
  const [isEditable, toggleEdit] = useToggle(false)
  const [isOn, toggleOn] = useToggle(false)
  const inputRef = useRef(null)

  useEffect(() => {
    // @ts-ignore [Do not know why]
    inputRef.current && inputRef.current.focus && inputRef.current.focus()
  })

  const CostumeCheckbox = (
    <label className={CheckboxStyle.toggle}>
      <input
        type="checkbox"
        checked={isOn}
        onChange={toggleOn}
        className={CheckboxStyle.toggleInput}
      />
      <span className={CheckboxStyle.toggleLabel} />
    </label>
  )

  const showText = (
    <span className={TextStyles.Text} onDoubleClick={toggleEdit}>
      {text}
    </span>
  )

  const editText = (
    <input
      ref={inputRef}
      onFocus={e => e.target.select()}
      className={TextStyles.Text}
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
