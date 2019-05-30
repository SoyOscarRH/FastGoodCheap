import React, { FunctionComponent, useState, useRef } from "react"
import ReactDOM from "react-dom"

import Styles from "./Styles.css"
import Option from "./Option"

const App: FunctionComponent = () => {
  const [state, setState] = useState([true, true, false])
  const lastOne = useRef(0)
  const update = (id: 0 | 1 | 2) => {
    const newState = [...state]
    newState[id] = !newState[id]
    if (newState.every(bit => bit)) {
      newState[lastOne.current] = false;
    }

    lastOne.current = id;
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
