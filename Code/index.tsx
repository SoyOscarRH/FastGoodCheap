import React, { FunctionComponent, useCallback } from "react"
import ReactDOM from "react-dom"

import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts"
import { copyToClipboard, copyToFB, copyToTwitter } from "./links"
import Option from "./Option"

import useJustTwoActive, { ActivesContext, ActivesDispatchContext } from "./useJustTwoActive"
import useTexts, { TextContext, TextDispatchContext } from "./useTexts"

import Styles from "./Styles.css"

const App: FunctionComponent = () => {
  const [actives, changeActives] = useJustTwoActive()
  const [texts, changeText] = useTexts()

  const toClip = useCallback(() => copyToClipboard(texts), [texts])
  const toFB = useCallback(() => copyToFB(texts), [texts])
  const toTwitter = useCallback(() => copyToTwitter(texts), [texts])

  return (
    <ActivesDispatchContext.Provider value={changeActives}>
      <TextDispatchContext.Provider value={changeText}>
        <ActivesContext.Provider value={actives}>
          <TextContext.Provider value={texts}>
            <React.Fragment>
              <main className={Styles.Container}>
                <div />
                <Option id={0} color="#009975" />
                <Option id={1} color="#145374" />
                <Option id={2} color="#c72c41" />
                <div />
                <div className={Styles.Links}>
                  <img src="Assets/clipboard.png" onClick={toClip} />
                  <img src="Assets/facebook.png" onClick={toFB} />
                  <img src="Assets/twitter.png" onClick={toTwitter} />
                </div>
              </main>
              <ToastsContainer position={ToastsContainerPosition.BOTTOM_LEFT} store={ToastsStore} />
            </React.Fragment>
          </TextContext.Provider>
        </ActivesContext.Provider>
      </TextDispatchContext.Provider>
    </ActivesDispatchContext.Provider>
  )
}

const DOM_ID = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOM_ID)
