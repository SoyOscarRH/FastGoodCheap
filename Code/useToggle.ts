import { useReducer, useCallback } from "react"

const reducer = (state: boolean, action: "toggle") => {
  switch (action) {
    case "toggle":
      return !state
    default:
      throw new Error("Unexpected action")
  }
}

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, dispatch] = useReducer(reducer, initialValue)
  const toggle = useCallback(() => dispatch("toggle"), [])

  return [value, toggle]
}

export default useToggle
