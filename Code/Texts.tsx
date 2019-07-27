import React, { useReducer, useEffect, useContext } from "react"

interface Action {
  id: number
  data: string
}

const getTexts = (initials: Array<string>) => {
  const URLparams = new URLSearchParams(window.location.search)

  return initials.map((defaultValue, index) => {
    const text = URLparams.get(`t${index + 1}`)
    return text || defaultValue
  })
}

const useCreateTexts = (initials: Array<string>) => {
  const [texts, dispatch] = useReducer((oldState: Array<string>, { id, data }: Action) => {
    const newTexts = [...oldState]
    newTexts[id] = data
    return newTexts
  }, getTexts(initials))

  useEffect(() => {
    document.title = texts.join(" vs ")
  })

  return [texts, dispatch] as [Array<string>, React.Dispatch<Action>]
}

const ChangeTextsContext = React.createContext((action: Action) => console.warn(action))
const TextsContext = React.createContext([] as Array<string>)

const useTexts = () => useContext(TextsContext)
const useChangeTexts = () => useContext(ChangeTextsContext)

export { useTexts, useChangeTexts, TextsContext, ChangeTextsContext }
export default useCreateTexts
