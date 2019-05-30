import React, { FunctionComponent, useRef, useEffect, useContext } from "react"
import { TextContext, TextDispatchContext } from "../useTexts"

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

export default Text