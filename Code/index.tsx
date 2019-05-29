import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import Option from "./Option"

const App: FunctionComponent = () => (
  <main>
    <Option isOn />
    <Option isOn />
    <Option isOn />
  </main>
)

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
