import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [joke, setJoke] = useState('')

    const getData = useCallback(async () => {
        const response = await axios.get(
            'https://api.chucknorris.io/jokes/random'
        )
        setJoke(response.data.value)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div className="">
            <p>{joke}</p>
            <button onClick={getData}>Refresh joke</button>
        </div>
    )
}

export default App
