import React from 'react'

export default function Test() {

    const amount = [10000, 20000, 30400, 56000, 66000, 77000]
    // let mapping = amount.map((item)=><h1>{item}</h1>)
    
  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "black"}}>Test</h1>
        
        <ol>
            {amount.map((item)=><li>{item}</li>)}
        </ol>
        
        </div>
  )
}
