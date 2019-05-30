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
  console.log({texts})
  // @ts-ignore
  ToastsStore.info(data)
  const URL = baseURL + "t1=" + texts[0] + "&t2=" + texts[1] + "&t3=" + texts[2]
  copyTextToClipboard(URL)
}

const copyToFB = (notSafeTexts: Array<string>) => {
  const texts = notSafeTexts.map(text => encodeURI(text))

  ToastsStore.info("Copied to clipboard")
  const baseFBURL = "https://www.facebook.com/sharer/sharer.php?u=" + baseURL
  const URL = baseFBURL + "t1=" + texts[0] + "%26t2=" + texts[1] + "%26t3=" + texts[2]
  window.open(URL, "_blank")
}

const copyToTwitter = (notSafeTexts: Array<string>) => {
  const texts = notSafeTexts.map(text => encodeURI(text))

  ToastsStore.info("Copied to clipboard")
  const baseFBURL = "https://twitter.com/share?url=" + baseURL
  const URL = baseFBURL + "t1=" + texts[0] + "%26t2=" + texts[1] + "%26t3=" + texts[2]

  window.open(URL, "_blank")
}

export { copyToClipboard, copyToFB, copyToTwitter }
