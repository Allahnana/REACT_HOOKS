import {useEffect} from 'react'

function useDocumentTitle(count) {
    // const [count, setCount] = useState(0)

    useEffect( () => {

        document.title = `Count ${count}`

    }, [count]) 
}

export default useDocumentTitle