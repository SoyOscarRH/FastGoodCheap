import React, { FunctionComponent, useRef, useEffect, useCallback } from "react"

import useToggle from "../useToggle"

const selectTextFromInput = (e: React.FocusEvent<HTMLInputElement>) => e.target.select()

type Text = FunctionComponent<{
  isOn: boolean
  text: string
  onChangeText: (data: string) => void
}>
const Text: Text = ({ isOn, text, onChangeText }) => {
  const [isEditing, toggleEditMode] = useToggle(false)

  const correctFontWeight = { fontWeight: isOn ? 500 : 300 }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current && inputRef.current.focus && inputRef.current.focus()
  })

  const onEnter = useCallback(e => e.key === "Enter" && toggleEditMode(), [toggleEditMode])

  return isEditing ? (
    <input
      type="text"
      ref={inputRef}
      defaultValue={text}
      onBlur={toggleEditMode}
      onFocus={selectTextFromInput}
      style={correctFontWeight}
      onKeyDown={onEnter}
      onChange={e => onChangeText(e.target.value)}
    />
  ) : (
    <span title="Double click to edit" style={correctFontWeight} onDoubleClick={toggleEditMode}>
      {text}
    </span>
  )
}

export default Text
