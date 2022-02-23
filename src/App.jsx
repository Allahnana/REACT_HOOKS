import { useState } from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookCounter2 from './Components/HookCounter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <ClassCounter/> */}

        {/* <HookCounter/> */}

        <HookCounter2/>
    </div>
  )
}

export default App
