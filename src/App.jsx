import { useState } from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'
import ClassCounterOne from './Components/ClassCounterOne'
import HookCounter from './Components/HookCounter'
import HookCounter2 from './Components/HookCounter2'
import HookCounter3 from './Components/HookCounter3'
import HookCounter4 from './Components/HookCounter4'
import HookCounterOne from './Components/HookCounterOne'
import HookMouse from './Components/HookMouse'
import IntervalHookCounter from './Components/IntervalHookCounter'
import MouseContainer from './Components/MouseContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <ClassCounter/> */}

        {/* <HookCounter/> */}

        {/* <HookCounter2/> */}

        {/* <HookCounter3/> */}

        {/* <HookCounter4/> */}

        {/* <HookCounterOne/> */}

        {/* <HookMouse/> */}

        {/* <MouseContainer/> */}

        {/* <ClassCounterOne/> */}

        <IntervalHookCounter/>
    </div>
  )
}

export default App
