import React, { FunctionComponent, useCallback } from "react"

import CostumeCheckbox from "./CostumeCheckbox"
import Text from "./Text"

import useToggle from "../useToggle"
import { useActives, useChangeActives } from "../ActiveText"

import OptionStyles from "./Styles.css"

type Checkbox = FunctionComponent<{
  id: number
  color: string
}>

const Option: Checkbox = ({ color, id }) => {
  const [isEditing, toggleEditMode] = useToggle(false)

  const actives = useActives()
  const changeActives = useChangeActives()
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
