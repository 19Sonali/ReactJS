import React from 'react'

export default function SpreadOperator() {
    //to copy values use ...
const num1 = [1,2,3,4];
const num2 = [5,6,7,8];

const combine = [...num1, ...num2]
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, three, ...rest]= numbers

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
const updateMyVehicle ={
    type: 'car',
    year: '2021',
    color: 'yellow'

}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle, color: 'blue'}
console.log(myUpdatedVehicle)

  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "blue"}}>Spread Operator</h1>
        <h3>{num1}</h3>
        <h3>{num2}</h3>
        <h3>{combine}</h3>
        <h3>{one}, {two}, {three}, {rest}</h3>
    </div>
  )
}
