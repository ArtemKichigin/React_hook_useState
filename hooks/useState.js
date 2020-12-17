import React, {useState} from 'react'

function computeCounter(){
    console.log('Some calculations')
    return Math.trunc(Math.random()*20)
}

function App(){

    const [counter, setCounter] = useState(() => {
        return computeCounter()
    })

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    function increment(){
        setCounter(counter+1)
    }

    function decrement(){
        setCounter(counter-1)
    }

    function updateTitle(){
        setState(prev => {
            return ({
                ...prev,
                title: 'New title'
            })
        })
    }

    return (

        <div>
            <h1>counter: {counter}</h1>
            <button className="btn btn-success" onClick={increment}>Add</button>
            <button className="btn btn-danger" onClick={decrement}>Take out </button>
            <button className="btn" onClick={updateTitle}>Change</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default App
