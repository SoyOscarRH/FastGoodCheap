import React, { FunctionComponent, CSSProperties } from "react"

import CheckboxStyle from "./CheckboxStyle.css"

type CostumeCheckbox = FunctionComponent<{
  onChange: () => void
  checked: boolean
  color: string
}>
const CostumeCheckbox: CostumeCheckbox = props => {
  // @ts-ignore
  const color: CSSProperties = {"--toggleBgColorActive": props.color}

  return (
    <label className={CheckboxStyle.toggle} style={color}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className={CheckboxStyle.toggleInput}
      />
      <span className={CheckboxStyle.toggleLabel} />
    </label>
  )
}

export default CostumeCheckbox
