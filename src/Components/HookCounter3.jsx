import React, {useState} from 'react'

function HookCounter3() {

    const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>HookCounter3</div>
  )
}

export default HookCounter3