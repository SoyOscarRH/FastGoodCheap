import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import Checkbox from "./Checkbox"

const App: FunctionComponent = () => (
  <main>
    <Checkbox isOn />
    <Checkbox isOn />
    <Checkbox isOn />
  </main>
)

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
