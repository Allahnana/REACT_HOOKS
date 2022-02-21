import { useState } from 'react'
import './App.css'
import ClassCounter from './Components/ClassCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <ClassCounter/>
    </div>
  )
}

export default App
