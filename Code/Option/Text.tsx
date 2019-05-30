import React, { FunctionComponent, useRef, useEffect, useContext, useCallback } from "react"
import { TextContext, TextDispatchContext } from "../useTexts"

const selectTextFromInput = e => e.target.select()

type Text = FunctionComponent<{
  id: 0 | 1 | 2
  isOn: boolean
  isEditing: boolean
  toggleEditMode: () => void
}>
const Text: Text = ({ isOn, id, isEditing, toggleEditMode }) => {
  const texts = useContext(TextContext)
  const updateText = useContext(TextDispatchContext)
  const correctFontWeight = { fontWeight: isOn ? 500 : 300 }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current && inputRef.current.focus && inputRef.current.focus()
  })

  const onEnter = useCallback(e => e.key === "Enter" && toggleEditMode(), [toggleEditMode])
  const onChange = useCallback(e => updateText({ id, data: e.target.value }), [id, updateText])

  return isEditing ? (
    <input
      type="text"
      ref={inputRef}
      defaultValue={texts[id]}
      onBlur={toggleEditMode}
      onFocus={selectTextFromInput}
      style={correctFontWeight}
      onKeyDown={onEnter}
      onChange={onChange}
    />
  ) : (
    <span title="Double click to edit" style={correctFontWeight} onDoubleClick={toggleEditMode}>
      {texts[id]}
    </span>
  )
}

export default Text