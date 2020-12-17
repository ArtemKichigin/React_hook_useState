import React, {useState, useEffect, useMemo} from 'react'

function complexCompute(num){

  let i = 0
  while(i < 1000000000) i++

  return num *2
}

function App(){
  const [number, setNumber] = useState(10)

  const [colored, setColored] = useState(false)

  const styles = useMemo(() => {
    return ({
      color: colored ? 'darkred' : 'green'
    })
  }, [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <>
      <h1 style={styles}>Computed: {computed}</h1>
      <h1>Number: {number}</h1>

      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Increase</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button> 
    </>
  )
}

export default App