import React, { FunctionComponent } from "react"

import CheckboxStyle from "./CheckboxStyle.css"

type CostumeCheckbox = FunctionComponent<{
  onChange: () => void
  checked: boolean
}>

const CostumeCheckbox: CostumeCheckbox = props => (
    <label className={CheckboxStyle.toggle}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className={CheckboxStyle.toggleInput}
      />
      <span className={CheckboxStyle.toggleLabel} />
    </label>
  )


export default CostumeCheckbox
