import { useState } from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <ClassCounter/> */}

        <HookCounter/>
    </div>
  )
}

export default App
