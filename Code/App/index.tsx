import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts"

import ActiveTextContainer from "../ActiveText"
import Links from "../Links"
import Option from "../Option"

import useCreateTexts, { TextsContext, ChangeTextsContext } from "../Texts"

import Styles from "./Styles.css"


const Space = () => <div />
const colors = ["#009975", "#145374", "#c72c41"]

const numOptions = (() => {
  const URLparams = new URLSearchParams(window.location.search)
  const numOption = URLparams.get("num")

  return Number(numOption) || 3
})()

const defaultTexts = (() => {
  const defaults = ["Good", "Fast", "Cheap"]

  return defaults.concat([])
})()

const App: FunctionComponent = () => {

  const [texts, changeText] = useCreateTexts(defaultTexts.slice(0, numOptions))
  const rowsStyle = { gridTemplateRows: `1fr ${"auto ".repeat(numOptions)} 2fr auto` }
  const IDs = [...Array(numOptions).keys()]

  return (
    <>
      <TextsContext.Provider value={texts}>
        <main className={Styles.Container} style={rowsStyle}>
          <ChangeTextsContext.Provider value={changeText}>
            <ActiveTextContainer numOption={numOptions}>
              <Space />
              {IDs.map(id => (
                <Option key={id} id={id} color={colors[id % colors.length]} />
              ))}
              <Space />
            </ActiveTextContainer>
          </ChangeTextsContext.Provider>

          <Links />
        </main>
      </TextsContext.Provider>

      <ToastsContainer position={ToastsContainerPosition.BOTTOM_LEFT} store={ToastsStore} />
    </>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
