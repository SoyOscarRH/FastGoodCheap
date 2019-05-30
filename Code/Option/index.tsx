import React, { FunctionComponent } from "react"
import useToggle from "../useToggle"
import OptionStyles from "./OptionStyles.css"

import CostumeCheckbox from "./CostumeCheckbox"
import Text from "./Text"

type Checkbox = FunctionComponent<{
  id: 0 | 1 | 2
  isOn: boolean
  color: string
  onClick: () => void
}>

const Option: Checkbox = ({ isOn, color, onClick, id }) => {
  const [isEditing, toggleEdit] = useToggle(false)

  return (
    <div className={OptionStyles.Container}>
      <span />
      <CostumeCheckbox color={color} checked={isOn} onChange={onClick} />
      <Text id={id} toggleEdit={toggleEdit} isOn isEditing={isEditing} />
      <span />
    </div>
  )
}

export default Option
