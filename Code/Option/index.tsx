import React, { FunctionComponent, useRef, useEffect, useContext } from "react"
import useToggle from "../useToggle"
import { TextContext, TextDispatchContext } from "../useTexts"

import CostumeCheckbox from "./CostumeCheckbox"

import TextStyles from "./TextStyles.css"

type Text = FunctionComponent<{
  id: 0 | 1 | 2
  isOn: boolean
  isEditing: boolean
  toggleEdit: () => void
}>

const Text: Text = ({ isOn, id, isEditing, toggleEdit }) => {
  const texts = useContext(TextContext)
  const updateText = useContext(TextDispatchContext)
  const correctFontWeight = { fontWeight: isOn ? 500 : 300 }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current && inputRef.current.focus && inputRef.current.focus()
  })

  return isEditing ? (
    <input
      ref={inputRef}
      defaultValue={texts[id]}
      onBlur={toggleEdit}
      type="text"
      onFocus={e => e.target.select()}
      style={correctFontWeight}
      onKeyDown={e => e.key === "Enter" && toggleEdit()}
      onChange={e => updateText({ id, data: e.target.value })}
    />
  ) : (
    <span style={correctFontWeight} onDoubleClick={toggleEdit}>
      {texts[id]}
    </span>
  )
}

type Checkbox = FunctionComponent<{
  id: 0 | 1 | 2
  isOn: boolean
  color: "Green" | "Blue" | "Red"
  onClick: () => void
}>

const Option: Checkbox = ({ isOn, color, onClick, id }) => {
  const [isEditing, toggleEdit] = useToggle(false)

  return (
    <div className={TextStyles.Container}>
      <span />
      <CostumeCheckbox checked={isOn} onChange={onClick} />
      <Text id={id} toggleEdit={toggleEdit} isOn isEditing={isEditing} />
      <span />
    </div>
  )
}

export default Option
