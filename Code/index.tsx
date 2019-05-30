import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import Option from "./Option"

import useJustTwoActive, { ActivesContext, ActivesDispatchContext } from "./useJustTwoActive"
import useTexts, { TextContext, TextDispatchContext } from "./useTexts"

import Styles from "./Styles.css"

const App: FunctionComponent = () => {
  const [actives, changeActives] = useJustTwoActive()
  const [texts, changeText] = useTexts()

  return (
    <ActivesDispatchContext.Provider value={changeActives}>
      <TextDispatchContext.Provider value={changeText}>
        <ActivesContext.Provider value={actives}>
          <TextContext.Provider value={texts}>
            <main className={Styles.Container}>
              <div />
              <Option id={0} color="#009975" />
              <Option id={1} color="#145374" />
              <Option id={2} color="#c72c41" />
              <div />
            </main>
          </TextContext.Provider>
        </ActivesContext.Provider>
      </TextDispatchContext.Provider>
    </ActivesDispatchContext.Provider>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
