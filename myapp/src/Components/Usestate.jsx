import React, { useState } from 'react'

export default function Usestate() {
    // name is variable and setName is a function
    const [name, setName] = useState('Rahul');
    const ChangeName = () => {
        setName('Kiran')
    }
    const [Phone, setPhone] = useState('1235465623');
    const ChangePhone = () => {
        setPhone('456977522566')
    }

    const [Colour, setColour] = useState("red");

    const [state, setState] =useState()
    // const [num, setNum] =useState()

    
    
    const HandleChange = (e) => {
      // console.log(e.target.value);
      // console.log(e.target.name);
      // setState(e.target.value)
      setState({...state, [e.target.name]:e.target.value})
      console.log(state);
    
    }
    const [bgColor, setBg] = useState("Black")
    const ChangeBg = (i) => {
      // setBg({...bgColor, [i.target.value]:i.target.name})
      setBg(i.target.value)
    }
    
  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "blue"}}>UseState</h1>     
        {/* <h1>{name}</h1>
        <button onClick={ChangeName}>Change</button>
        <h1>{Phone}</h1>
        <button onClick={ChangePhone}>Change</button> */}
        <h2 style={{color:Colour}}>My fav colour is {Colour} </h2>
        <button style={{margin: "20px"}} onClick={()=>setColour("Blue")}>Blue</button>
        <button style={{margin: "20px"}}onClick={()=>setColour("Green")}>Green</button>
        <button style={{margin: "20px"}}onClick={()=>setColour("Yellow")}>Yellow</button>
        {/* <br/><hr></hr>
        <input type='text' name='MyName' placeholder='Enter your name' onChange={(e)=>HandleChange(e)}/> 
        <input type='number' name='MyPhone' placeholder='Enter your number' onChange={(e)=>HandleChange(e)}/>
        <input type='text' name='MyAddress' placeholder='Enter your Address' onChange={(e)=>HandleChange(e)}/>
        <input type='text' name='MyEmail' placeholder='Enter your Email' onChange={(e)=>HandleChange(e)}/>

        <h1 style={{backgroundColor:bgColor}}> Use State</h1>
        {/* <input type='text' name='Color' onChange={()=>setBg()}/> */}
        {/* <input type='text' name='Color' onChange={(i)=>ChangeBg(i)}/> */} 
        </div>
  )
}
