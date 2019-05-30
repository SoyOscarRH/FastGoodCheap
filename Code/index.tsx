import React, { FunctionComponent, useState } from "react"
import ReactDOM from "react-dom"

import Styles from "./Styles.css"
import Option from "./Option"

const App: FunctionComponent = () => {
  const [state, setState] = useState([true, true, false])
  const update = id => {
    const newState = [...state]
    newState[id] = !newState[id]
    setState(newState)
  }
  
  return (
    <main className={Styles.Container}>
      <div />
      <Option default="Fast"  onClick={() => update(0)} isOn={state[0]} color="Green" />
      <Option default="Good"  onClick={() => update(1)} isOn={state[1]} color="Blue" />
      <Option default="Cheap" onClick={() => update(2)} isOn={state[2]} color="Red" />
      <div />
    </main>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
