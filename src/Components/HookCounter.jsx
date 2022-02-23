import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>My Very First Counter using HOOKS</h1>
        {/* <img  className="photo"src={('https://tsh.io/wp-content/uploads/fly-images/14921/react-hooks-best-practices-lead_-810x540.jpg')} /> */}
        <button className="btn"  onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter