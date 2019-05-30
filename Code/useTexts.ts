import { useReducer, useCallback } from "react"



type index = 0 | 1 | 2
type texts = [string, string, string]
type voidFn = (data: string) => void
interface Action {
  id: index
  data: string
}
const getDefaultTexts = (): texts => {
  let searchParams = new URLSearchParams(window.location.search)
  const text1 = searchParams.get("text1")
  const text2 = searchParams.get("text2")
  const text3 = searchParams.get("text3")

  console.log({text1, text2, text3})

  if (!!text1 && !!text2 && !!text3) return [text1, text2, text3]
  else return ["Good", "Fast", "Cheap"]
}

const initial: texts = getDefaultTexts()


const useTexts = (): [texts, [voidFn, voidFn, voidFn]] => {
  const [texts, dispatch] = useReducer((state: texts, action: Action): texts => {
    const { id, data } = action
    const newState: texts = [state[0], state[1], state[2]]
    newState[id] = data
    

    document.title = newState.join(" ")
    return newState
  }, initial)

  const fun1 = useCallback(data => dispatch({ id: 0, data }), [])
  const fun2 = useCallback(data => dispatch({ id: 1, data }), [])
  const fun3 = useCallback(data => dispatch({ id: 2, data }), [])

  return [texts, [fun1, fun2, fun3]]
}

export default useTexts
