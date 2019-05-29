import React, { FunctionComponent, useState } from "react"
import useToggle from "../useToggle"

import CheckboxStyle from "./CheckboxStyle.css"
import TextStyles from "./TextStyles.css"

import Styles from "../Styles.css"

const Checkbox: FunctionComponent<{ isOn: boolean }> = props => {
  const [text, setText] = useState("Fast")
  const [isEditable, toggleEdit] = useToggle(false)
  const [isOn, toggleOn] = useToggle(false)

  console.log(props)

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
    <span className={TextStyles.text} onDoubleClick={toggleEdit}>
      {text}
    </span>
  )

  const editText = (
    <input
      className={TextStyles.text}
      value={text}
      onBlur={toggleEdit}
      onChange={e => {
        setText(e.target.value)
      }}
    />
  )

  return (
    <div className={TextStyles.container}>
      {CostumeCheckbox}
      {isEditable ? editText : showText}
      <br />
      <br />
    </div>
  )
}

export default Checkbox
