import React from 'react'

export default function ArrowFunctions() {
    function Simple(name)
    {
        alert('This is simple function ' +name)
    }

    /*Arrow function*/
    // const Arrow = ()=> alert("This is a arrow function")
    // const Arrow = name => alert("This is a arrow function " +name)
    const Arrow = (name, age)=> alert("This is a arrow function " +name)
    

  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "red"}}>ArrowFunctions</h1>
        <button onClick={()=>Simple("Kiran")}>Simple Function</button>
        <button onClick={()=>Arrow("Jhon", "30")}>Arrow Function</button>
    </div>
  )
}
