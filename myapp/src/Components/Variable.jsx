import React from 'react'

export default function Variable() {
    let a=10;
    // let can be accessed in block only ie block scope
    var b=20;
    //var is functional scope
    const c=30;
    
    a=100;
    b=200;
    
    let name="John";
    console.log(name,1111)
    if(true)
    {
        let name="Kiran"
        console.log(name,22222)
    }
    console.log(name,3333)
  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "blue"}}>Variables</h1>
        <h2>{a}</h2>
        <h2>{b}</h2>
        <h2>{c}</h2>
        </div>
  )
}
