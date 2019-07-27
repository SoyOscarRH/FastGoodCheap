import { useReducer, useCallback } from "react"

const useToggle = (initialValue: boolean) => {
  const [value, dispatch] = useReducer((state: boolean) => !state, initialValue)
  const toggle = useCallback(() => dispatch("toggle"), [])

  return [value, toggle] as [boolean, () => void]
}

export default useToggle