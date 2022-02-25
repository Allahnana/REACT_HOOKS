import { useState } from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookCounter2 from './Components/HookCounter2'
import HookCounter3 from './Components/HookCounter3'
import HookCounter4 from './Components/HookCounter4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <ClassCounter/> */}

        {/* <HookCounter/> */}

        {/* <HookCounter2/> */}

        {/* <HookCounter3/> */}

        <HookCounter4/>
    </div>
  )
}

export default App
