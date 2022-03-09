import React, { useState, useReducer } from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'
import ClassCounterOne from './Components/ClassCounterOne'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'
import Counter from './Components/Counter'
import CounterOne from './Components/CounterOne'
import CounterThree from './Components/CounterThree'
import CounterTwo from './Components/CounterTwo'
import DataFetching from './Components/DataFetching'
import DataFetchingOne from './Components/DataFetchingOne'
import DataFetchingTwo from './Components/DataFetchingTwo'
import HookCounter from './Components/HookCounter'
import HookCounter2 from './Components/HookCounter2'
import HookCounter3 from './Components/HookCounter3'
import HookCounter4 from './Components/HookCounter4'
import HookCounterOne from './Components/HookCounterOne'
import HookMouse from './Components/HookMouse'
import IntervalHookCounter from './Components/IntervalHookCounter'
import MouseContainer from './Components/MouseContainer'
import ParentComponent from './Components/ParentComponent'

export const CountContext = React.createContext()


const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case "increament" :
            return state + 1

        case "decreament" :
            return state - 1

            case "reset" :
                return initialState

                default:
                   return state
    }
}

function App() {
  // const [count, setCount] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)




  return (

    // <CountContext.Provider value={{countState: count, countDispatch : dispatch}}>
    <div className="App">

      {/* Count - {count} */}
        {/* <ClassCounter/> */}

        {/* <HookCounter/> */}

        {/* <HookCounter2/> */}

        {/* <HookCounter3/> */}

        {/* <HookCounter4/> */}

        {/* <HookCounterOne/> */}

        {/* <HookMouse/> */}

        {/* <MouseContainer/> */}

        {/* <ClassCounterOne/> */}

        {/* <IntervalHookCounter/> */}

        {/* <DataFetching/> */}

        {/* <CounterOne/> */}

        {/* <CounterTwo/> */}

        {/* <CounterThree/> */}

        {/* <ComponentA/> */}

        {/* <ComponentB/> */}

        {/* <ComponentC/> */}

        {/* <DataFetchingOne/> */}

        {/* <DataFetchingTwo/> */}

        {/* <ParentComponent/> */}

        <Counter/>
    </div>


         
    // </CountContext.Provider>
  )
}

export default App
