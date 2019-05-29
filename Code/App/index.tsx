import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import CheckBox from "./CheckBox"

const App: FunctionComponent = () => (
  <main>
    <CheckBox isOn />
    <CheckBox isOn />
    <CheckBox isOn />
  </main>
)

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
