import React from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { ToastsStore } from "react-toasts"

const createLink = (normalText: Array<string>) => {
  const baseURL = "https://soyoscarrh.github.io/FastGoodCheap/"

  const texts = normalText.map(text => encodeURIComponent(text))
  const link = texts.reduce((link, text, num) => link + `${num ? "&" : "?"}t${num + 1}=${text}`, "")
  return baseURL + link
}

const copyToClipboard = (link: string) => {
  const actualScroll = document.documentElement.scrollTop || document.body.scrollTop
  const textArea = document.createElement("textarea")
  textArea.value = link
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  document.execCommand("copy")
  document.body.removeChild(textArea)
  scroll(0, actualScroll)

  ToastsStore.info("Copied to clipboard")
}

const showRespect = () => {
  const Toast: TimerHandler = (link: string, text: string, duration: number = 10000) => {
    const element = renderToStaticMarkup(
      <span style={{ cursor: "pointer" }} onClick={() => window.open(link, "_blank")}>
        {text}
      </span>
    )

    ToastsStore.info(element, duration)
  }

  const twitterLink = "https://twitter.com/missingcloudltd/status/826203153934729218"
  const twitterText = "Based in this tweet"
  setTimeout(Toast(twitterLink, twitterText), 0)

  const codeLink = "https://github.com/SoyOscarRH/FastGoodCheap"
  const codeText = "See the source code"
  setTimeout(Toast(codeLink, codeText), 3000)

  const cssLink = "https://codepen.io/melnik909/pen/oewwBo?editors=1100"
  const cssText = "Original CSS Switch"
  setTimeout(Toast(cssLink, cssText), 6000)
}

const open = (URL: string) => window.open(URL, "_blank")
const showMe = () => open("https://soyoscarrh.github.io/")
const copyToTwitter = (link: string) => open("https://twitter.com/share?url=" + link)

export { createLink, showMe, copyToTwitter, copyToClipboard, showRespect }
