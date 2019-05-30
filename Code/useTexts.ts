import React, { useReducer, useEffect } from "react"

type texts = [string, string, string]
interface Action { id: 0 | 1 | 2, data: string}

const initialTexts = (() => {
  const URLparams = new URLSearchParams(window.location.search)
  const text1 = URLparams.get("t1")
  const text2 = URLparams.get("t2")
  const text3 = URLparams.get("t3")

  if (!!text1 && !!text2 && !!text3) return [text1, text2, text3] as texts
  else return ["Good", "Fast", "Cheap"] as texts
})()

const useTexts = (): [texts, React.Dispatch<Action>] => {
  const [texts, dispatch] = useReducer((oldState: texts, action: Action) => {
    const state: texts = [oldState[0], oldState[1], oldState[2]]
    state[action.id] = action.data
    return state
  }, initialTexts)

  useEffect(() => {
    document.title = texts.join(" ")
  }, [texts])

  return [texts, dispatch]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TextDispatchContext = React.createContext((_action: Action) => {})
export const TextContext = React.createContext(initialTexts)

export default useTexts
