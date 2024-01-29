import React from 'react'
import {name} from './Exp'
import { PhNo } from './Exp'
import Hello, { address, pincode } from './Exp'

export default function Imp() {
  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "red"}}>Import</h1>
        {/* Named exporting */}
        <h1> My name is {name}</h1>
        <h1> My number is  {PhNo}</h1>
        <h1> {address}, {pincode}</h1>
        <button onClick={Hello}>Hello</button>
    </div>
  )
}
