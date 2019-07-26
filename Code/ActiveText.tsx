import React, { FunctionComponent, useReducer, useContext, useRef } from "react"

type index = number
type actives = Array<boolean>
interface State {
  actives: actives
  history: Array<index>
}

const ActivesDispatchContext = React.createContext((action: index) => console.warn(action))
const ActivesContext = React.createContext([] as actives)

const createInitialState = (numOption: number) => {
  const history = [...Array(numOption - 1).keys()]
  const actives = Array(numOption).fill(true) as Array<boolean>
  actives[actives.length - 1] = false

  return { actives, history }
}

const ActiveTextContainer: FunctionComponent<{ numOption: number }> = props => {
  const initialState = useRef(createInitialState(props.numOption))

  const [state, changeActives] = useReducer((oldState: State, id: index) => {
    const actives = [...oldState.actives] as actives
    let history = [...oldState.history]

    actives[id] = !actives[id]

    if (actives[id]) history.push(id)
    else history = history.filter(h => h !== id)

    if (actives.every(bit => bit)) {
      const indextoDelete = history[0]
      actives[indextoDelete] = false
      history = history.filter(h => h !== indextoDelete)
    }

    return { actives, history }
  }, initialState.current)

  return (
    <ActivesContext.Provider value={state.actives}>
      <ActivesDispatchContext.Provider value={changeActives}>
        {props.children}
      </ActivesDispatchContext.Provider>
    </ActivesContext.Provider>
  )
}

const useActives = () => useContext(ActivesContext)
const useChangeActives = () => useContext(ActivesDispatchContext)

export { useActives, useChangeActives }

export default ActiveTextContainer
