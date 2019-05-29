import React, { FunctionComponent, useState } from "react"
import useToggle from "./useToggle"
import CheckboxStyle from "./CheckboxStyle.css"
import Styles from "./Styles.css"

const Checkbox: FunctionComponent<{ isOn: boolean }> = props => {
  const [text, setText] = useState("Fast")
  const [isEditable, toggleEdit] = useToggle(false)
  const [isOn, toggleOn] = useToggle(false)

  console.log(props)

  return (
    <div className={Styles.container}>
      <label className={CheckboxStyle.toggle}>
        <input type="checkbox" checked={isOn} onChange={toggleOn} className={CheckboxStyle.toggleInput} />
        <span className={CheckboxStyle.toggleLabel} />
      </label>
      {isEditable ? (
        <input
          value={text}
          onBlur={toggleEdit}
          onChange={e => {
            setText(e.target.value)
          }}
        />
      ) : (
        <span className={Styles.text} onDoubleClick={toggleEdit}>{text}</span>
      )}
      <br />
      <br />
    </div>
  )
}

export default Checkbox
