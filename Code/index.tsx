import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import Styles from "./Styles.css"
import Option from "./Option"

const App: FunctionComponent = () => (
  <main className={Styles.Container}>
    <div />
    <Option default="Fast" isOn />
    <Option default="Good" isOn />
    <Option default="Cheap" isOn />
    <div />
  </main>
)

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
