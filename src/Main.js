import React from 'react'

export default function Main({toggle}){

    return (
        <>
            <h1>Hi from the example of hooks Context</h1>
            <button onClick={toggle} className="btn btn-success">Show alert</button>  
        
        </>
    )
}