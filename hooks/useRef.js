import React, {useState, useEffect, useRef} from 'react'

function App(){

  const [value, setValue] = useState('initial')

  const renderCount = useRef(1)

  const inputRef = useRef(null)

  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++

    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>RenderCount: {renderCount.current}</h1>
      <h2>Previus value: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  )
}

export default App