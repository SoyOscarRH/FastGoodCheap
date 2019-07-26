import React, { FunctionComponent, useRef, useEffect, useCallback } from "react"
import { useTexts, useChangeTexts } from "../Texts"

const selectTextFromInput = e => e.target.select()

type Text = FunctionComponent<{
  id: number
  isOn: boolean
  isEditing: boolean
  toggleEditMode: () => void
}>
const Text: Text = ({ isOn, id, isEditing, toggleEditMode }) => {
  const texts = useTexts()
  const updateText = useChangeTexts()
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