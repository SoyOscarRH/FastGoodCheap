import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts"
import copyTextToClipboard from "./copy"
import Option from "./Option"

import useJustTwoActive, { ActivesContext, ActivesDispatchContext } from "./useJustTwoActive"
import useTexts, { TextContext, TextDispatchContext } from "./useTexts"

import Styles from "./Styles.css"

const baseURL = "https://soyoscarrh.github.io/FastGoodCheap/?"

const App: FunctionComponent = () => {
  const [actives, changeActives] = useJustTwoActive()
  const [texts, changeText] = useTexts()

  const copyToClipboard = () => {
    ToastsStore.info("Copied to clipboard")
    const URL = baseURL + "t1=" + texts[0] + "&t2=" + texts[1] + "&t3=" + texts[2]
    copyTextToClipboard(URL)
  }

  const copyToFB = () => {
    ToastsStore.info("Copied to clipboard")
    const baseFBURL = "https://www.facebook.com/sharer/sharer.php?u=" + baseURL
    const URL = baseFBURL + "t1=" + texts[0] + "%26t2=" + texts[1] + "%26t3=" + texts[2]
    window.open(URL, "_blank");
  }

  const copyToTwitter = () => {
    ToastsStore.info("Copied to clipboard")
    const baseFBURL = "https://twitter.com/share?url=" + baseURL
    const URL = baseFBURL + "t1=" + texts[0] + "%26t2=" + texts[1] + "%26t3=" + texts[2]
    window.open(URL, "_blank");
  }

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
                  <img src="Assets/clipboard.png" onClick={copyToClipboard} />
                  <img src="Assets/facebook.png" onClick={copyToFB} />
                  <img src="Assets/twitter.png" onClick={copyToTwitter} />
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
