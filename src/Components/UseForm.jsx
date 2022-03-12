import React, {useState} from 'react'
import useInput from '../Hooks/useInput'

function UseForm() {



    // const [firstName, setFirstName] = useState('')

    // const [lastName, setLastName] = useState('')

    const [firstName,bindFirstName, resetFirstName ] = useInput('')

    const [lastName,bindLastName, resetLastName ] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert ( `Hello ${firstName}  ${lastName}`)
        resetFirstName()
        resetLastName()


    }

  return (
    <div>

        <h2>DOINGS FORM</h2>

        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input 
               {...bindFirstName}
                type= "text"/>
            </div>

            <br/>

            <div>
                <label>Last Name</label>
                <input  
               {...bindLastName}
                type= "text"/>
            </div>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default UseForm