import React, { FunctionComponent, useState } from "react"
import useToggle from "./useToggle"
import Switch from "react-switch"
import Styles from "./Styles.css"

const Checkbox: FunctionComponent<{ isOn: boolean }> = props => {
  const [text, setText] = useState("Fast")
  const [isEditable, toggleEdit] = useToggle(false)
  const [isOn, toggleOn] = useToggle(false)

  console.log(props)

  return (
    <div className={Styles.container}>
      <label className="switch">
        <input type="checkbox" checked={isOn} />
        <span className="slider round"></span>
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
