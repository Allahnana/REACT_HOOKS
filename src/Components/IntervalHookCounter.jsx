import React,{useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount( count + 1)

        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {

        function doings(){
            console.log(someProp)
        }

        doings()
        const Interval = setInterval(tick, 1000)

        return () =>{
            clearInterval(Interval)
        }
    }, [someProp])
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter