import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(()=>{
        console.log('useEffect Called')

        window.addEventListener('mouseover', logMousePosition)

        return (() => {
            console.log('Component unmounting state')
            window.removeEventListener('mouseover', logMousePosition)
        })
    },[] )

    const logMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

   
  return (
    <div>

        Hook X - {x}   Hook Y - {y}

    </div>
  )
}

export default HookMouse