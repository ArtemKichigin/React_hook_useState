import React, {useState, useCallback} from 'react'
import ItemsList from './hooks/useCallback/itemsList'

function App(){

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback((indexNumber) => {

    return new Array(count).fill('').map((_, i) => `Element of array ${i+indexNumber}`)
  }, [count])

  return (
    <>
      <h1 style={styles}>Count: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>

      <ItemsList getItems={generateItemsFromAPI} />   
    </>

  )
}

export default App