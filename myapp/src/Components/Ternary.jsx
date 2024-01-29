import React from 'react'

export default function Ternary() {
    var a =10;
    var b=20;
    // if(a===b){
    // console.log(true);
    // }
    // else{
    //     console.log(false);
    //     }
    // Ternary operator
    const Task = () => {
        const time = new Date().toLocaleTimeString; //to print current time 
        time <=12? alert('Good Morning'): time >='4.00 pm'? alert('Good afternoon'): alert('Good night')
       
       
    }
    
  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "red"}}>Ternary Operator</h1>
        {a===b?<h1>True</h1>:<h1>False</h1>}
        <button style={{fontSize:'30px', padding: '10px'}} onClick={()=>Task()}>Greet</button>
    </div>
  )
}
