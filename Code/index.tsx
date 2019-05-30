import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import Option from "./Option"

import useJustTwo from "./useJustTwo"
import useTexts, { TextContext, TextDispatchContext } from "./useTexts"

import Styles from "./Styles.css"

const App: FunctionComponent = () => {
  const [actives, [fun1, fun2, fun3]] = useJustTwo()
  const [texts, dispatch] = useTexts()

  return (
    <TextDispatchContext.Provider value={dispatch}>
      <TextContext.Provider value={texts}>
        <main className={Styles.Container}>
          <div />
          <Option id={0} onClick={fun1} isOn={actives[0]} color="Green" />
          <Option id={1} onClick={fun2} isOn={actives[1]} color="Blue" />
          <Option id={2} onClick={fun3} isOn={actives[2]} color="Red" />
          <div />
        </main>
      </TextContext.Provider>
    </TextDispatchContext.Provider>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
