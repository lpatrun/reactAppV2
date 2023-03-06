import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    // useState -> spremnik podataka
    const [joke, setJoke] = useState('')

    // useCallback - hook za memoizaciju funkcije, odnosno koristimo ga kad
    // fuknciju pozivamo u useEffectu
    const getData = useCallback(async () => {
        const response = await axios.get(
            'https://api.chucknorris.io/jokes/random'
        )
        setJoke(response.data.value)
    }, [])

    // useEffect -> za pozivanje funkcija kad se promijene uvjeti/podatci unutar []
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
