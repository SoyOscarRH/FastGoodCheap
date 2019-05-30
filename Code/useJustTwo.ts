import { useReducer, useCallback, useRef } from "react"

type index = 0 | 1 | 2
type activities = [boolean, boolean, boolean]
type voidFn = () => void
const initial: activities = [true, true, false]

const useJustTwo = () : [activities, [voidFn, voidFn, voidFn]] => {
  const lastOne = useRef(0)
  const [state, dispatch] = useReducer((state: activities, id: index): activities => {
    const newState: activities = [state[0], state[1], state[2]]
    newState[id] = !newState[id]

    if (newState.every(bit => bit)) newState[lastOne.current] = false
    lastOne.current = id

    return newState
  }, initial)

  const fun1 = useCallback(() => dispatch(0), [])
  const fun2 = useCallback(() => dispatch(1), [])
  const fun3 = useCallback(() => dispatch(2), [])

  return [state, [fun1, fun2, fun3]]
}

export default useJustTwo