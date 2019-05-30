import React from "react"

import { ToastsStore } from "react-toasts"

const copyTextToClipboard = (text: string) => {
  const actualScroll = document.documentElement.scrollTop || document.body.scrollTop
  const textArea = document.createElement("textarea")
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  document.execCommand("copy")
  document.body.removeChild(textArea)
  scroll(0, actualScroll)
}

const baseURL = "https://soyoscarrh.github.io/FastGoodCheap/?"

const copyToClipboard = (notSafeTexts: Array<string>) => {
  const data = <span>Copied to clipboard</span>
  const texts = notSafeTexts.map(text => encodeURI(text))

  // @ts-ignore
  ToastsStore.info(data)
  const URL = baseURL + "t1=" + texts[0] + "&t2=" + texts[1] + "&t3=" + texts[2]
  copyTextToClipboard(URL)
}

const copyToTwitter = (notSafeTexts: Array<string>) => {
  const texts = notSafeTexts.map(text => encodeURI(text))

  ToastsStore.info("Copied to clipboard")
  const baseFBURL = "https://twitter.com/share?url=" + baseURL
  const URL =
    baseFBURL + encodeURIComponent("t1=" + texts[0] + "&t2=" + texts[1] + "&t3=" + texts[2])

  window.open(URL, "_blank")
}

const showRespect = () => {
  const CSS = (
    <span
      style={{ cursor: "pointer" }}
      onClick={() => window.open("https://codepen.io/melnik909/pen/oewwBo?editors=1100", "_blank")}
    >
      original CSS Switch
    </span>
  )

  const twitter = (
    <span
      style={{ cursor: "pointer" }}
      onClick={() =>
        window.open("https://twitter.com/missingcloudltd/status/826203153934729218", "_blank")
      }
    >
      based in this tweet
    </span>
  )

  // @ts-ignore
  setTimeout( () => ToastsStore.info(CSS, 7000), 2000)
  // @ts-ignore
  ToastsStore.info(twitter, 7000)
}

const showMe = () => window.open("https://soyoscarrh.github.io/", "_blank")

export { copyToClipboard, copyToTwitter, showMe, showRespect }
