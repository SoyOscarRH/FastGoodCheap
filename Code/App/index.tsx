import React, { FunctionComponent, useState, useEffect } from "react"
import ReactDOM from "react-dom"

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
  const missing = Math.max(0, numOptions - 3)
  return defaults.concat(Array(missing).fill("?"))
})()

const App: FunctionComponent = () => {
  const [texts, changeText] = useCreateTexts(defaultTexts.slice(0, numOptions))
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 40)
  }, [])

  const style = {
    gridTemplateRows: `1fr ${"auto ".repeat(numOptions)} 2fr auto`,
    visibility: isVisible ? "initial" : ("hidden" as "initial" | "hidden"),
  }

  return (
    <>
      <TextsContext.Provider value={texts}>
        <main className={Styles.Container} style={style}>
          <ChangeTextsContext.Provider value={changeText}>
            <ActiveTextContainer numOption={numOptions}>
              <Space />
              {[...Array(numOptions).keys()].map(id => (
                <Option key={id} id={id} color={colors[id % colors.length]} />
              ))}
              <Space />
            </ActiveTextContainer>
          </ChangeTextsContext.Provider>

          <Links />
        </main>
      </TextsContext.Provider>
    </>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
