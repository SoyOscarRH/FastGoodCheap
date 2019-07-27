import React, { FunctionComponent, useCallback } from "react"

import CostumeCheckbox from "./CostumeCheckbox"
import Text from "./Text"

import { useTexts, useChangeTexts } from "../Texts"
import { useActives, useChangeActives } from "../ActiveText"

import OptionStyles from "./Styles.css"

const Space = () => <span />
const Option: FunctionComponent<{ id: number; color: string }> = ({ color, id }) => {
  const actives = useActives()
  const changeActives = useChangeActives()

  const isOn = actives[id]
  const toggleThisID = useCallback(() => changeActives(id), [id, changeActives])

  const texts = useTexts()
  const updateText = useChangeTexts()

  const onChangeText = useCallback((data: string) => updateText({ id, data }), [id, updateText])

  return (
    <div className={OptionStyles.Container}>
      <Space />
      <CostumeCheckbox {...{ color, onChange: toggleThisID, isOn }} />
      <Text {...{ isOn, text: texts[id], onChangeText, toggleThisID }} />
      <Space />
    </div>
  )
}

export default Option
