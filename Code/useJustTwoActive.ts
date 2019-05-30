import React, { useReducer } from "react"

type index = 0 | 1 | 2
type actives = [boolean, boolean, boolean]
interface State {
  actives: actives
  history: Array<index>
}

const initialValue: actives = [true, true, false]
const initialHistory = [0, 1] as Array<index>

const useJustTwoActive = (): [actives, React.Dispatch<index>] => {
  const [state, dispatch] = useReducer(
    (oldState: State, id: index) => {
      let { actives: oldActives, history: OldHistory } = oldState
      const actives = [oldActives[0], oldActives[1], oldActives[2]] as actives
      let history = [...OldHistory]

      actives[id] = !actives[id]

      const toDelete = actives.every(bit => bit)
      const indextoDelete = history[0]

      if (actives[id]) history.push(id)
      else history = history.filter(h => h !== id)

      if (toDelete) {
        actives[indextoDelete] = false
        history = history.filter(h => h !== indextoDelete)
      }

      return { actives: actives, history }
    },
    { actives: initialValue, history: initialHistory }
  )

  return [state.actives, dispatch]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ActivesDispatchContext = React.createContext((_action: index) => {})
export const ActivesContext = React.createContext(initialValue)

export default useJustTwoActive
