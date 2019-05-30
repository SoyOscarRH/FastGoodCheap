  
export default function copyTextToClipboard(text: string) {
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
