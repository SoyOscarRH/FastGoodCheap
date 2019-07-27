import React, { FunctionComponent, CSSProperties } from "react"

import CheckboxStyle from "./CheckboxStyle.css"

const CostumeCheckbox: FunctionComponent<{
  onChange: () => void
  isOn: boolean
  color: string
}> = props => {
  // @ts-ignore
  const color: CSSProperties = { "--toggleBgColorActive": props.color }
  return (
    <label className={CheckboxStyle.toggle} style={color}>
      <input
        type="checkbox"
        checked={props.isOn}
        onChange={props.onChange}
        className={CheckboxStyle.toggleInput}
      />
      <span className={CheckboxStyle.toggleLabel} />
    </label>
  )
}

export default CostumeCheckbox
