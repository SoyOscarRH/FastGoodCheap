import React, { FunctionComponent, useContext, useCallback } from "react"

import CostumeCheckbox from "./CostumeCheckbox"
import Text from "./Text"

import useToggle from "../useToggle"
import { ActivesContext, ActivesDispatchContext } from "../useJustTwoActive"

import OptionStyles from "./OptionStyles.css"

type Checkbox = FunctionComponent<{
  id: 0 | 1 | 2
  color: string
}>

const Option: Checkbox = ({ color, id }) => {
  const [isEditing, toggleEditMode] = useToggle(false)

  const actives = useContext(ActivesContext)
  const changeActives = useContext(ActivesDispatchContext)
  const isOn = actives[id]
  const onClick = useCallback(() => changeActives(id), [id, changeActives])

  return (
    <div className={OptionStyles.Container}>
      <span />
      <CostumeCheckbox color={color} checked={isOn} onChange={onClick} />
      <Text id={id} toggleEditMode={toggleEditMode} isOn={isOn} isEditing={isEditing} />
      <span />
    </div>
  )
}

export default Option
