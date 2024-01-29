import React from 'react'

export default function Props(props, {value, item}) {
    // Props are used to copy data of one file to a new file
    console.log(value);
  return (
    
    <div>
                <h1 style={{color:'white', backgroundColor: "blue"}}>Props</h1>
                <h1>Good morning {props.value}, {props.age}</h1>
                <ol>
                    {props.item.map((num) => {
                        return(
                            <li key={num}>{num}</li>
                        )
                    })}
                </ol>
                

    </div>
  )
}
