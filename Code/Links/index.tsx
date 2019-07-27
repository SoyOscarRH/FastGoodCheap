import React, { FunctionComponent } from "react"

import { useTexts } from "../Texts"
import Styles from "./Styles.css"

import { createLink, showMe, copyToTwitter, copyToClipboard, showRespect } from "./Helpers"

const Links: FunctionComponent = () => {
  const texts = useTexts()
  const link = createLink(texts)

  const toClipboard = () => copyToClipboard(link)
  const toTwitter = () => copyToTwitter(link)

  return (
    <div className={Styles.Links}>
      <span />
      <img title="Copy page to copyclip" src="Assets/clipboard.png" onClick={toClipboard} />
      <img title="Share it on Twitter" src="Assets/twitter.png" onClick={toTwitter} />
      <img title="Me" src="Assets/oscar.png" onClick={showMe} />
      <img title="Info on this page" src="Assets/info.png" onClick={showRespect} />

    </div>
  )
}

export default Links
