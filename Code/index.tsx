import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import Styles from "./Styles.css"
import Option from "./Option"

import useJustTwo from "./useJustTwo"
import useTexts from "./useTexts"

const App: FunctionComponent = () => {
  const [actives, [fun1, fun2, fun3]] = useJustTwo()
  const [texts, updaters] = useTexts() 

  return (
    <main className={Styles.Container}>
      <div />
      <Option
        defaultText={texts[0]}
        onTextChange={updaters[0]}
        onClick={fun1}
        isOn={actives[0]}
        color="Green"
      />
      <Option
        defaultText={texts[1]}
        onTextChange={updaters[1]}
        onClick={fun2}
        isOn={actives[1]}
        color="Blue"
      />
      <Option
        defaultText={texts[2]}
        onTextChange={updaters[2]}
        onClick={fun3}
        isOn={actives[2]}
        color="Red"
      />
      <div />
    </main>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
