import React from 'react'

export default function Destructuring() {

    //taking only required values -destructuring 
    const vehicles= ["Mustang", "f-150", "expedition"];

    //old destructuring method
    const car = vehicles[0];
    const suv = vehicles[1];
    const truck = vehicles[2];

    const amount= [10, 20, 30];
    const [x,y,z]= amount;

    //new method
    const [car1, suv1, truck1, car2] = vehicles

    //object is key value pair
    //Destructuring objects
    const vehicle = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021,
        color: 'red',
        registration: {
            city: "Mangalore",
            state: "Karnataka",
            country: "India"
        }
    }
    //write key values
    const {brand, model, type, year, color, registration: {city, state, country}} = vehicle
  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "red"}}>Destructuring Array</h1>
        <h3>{car1}</h3>
        <h3>{suv1}</h3>
        <h3>{truck1}</h3>
        <h3>{car2}</h3>
        <h3>{x} {y} {z}</h3>
        <h3> I have {color} {brand} {model} {type} registered in {city}.</h3>

    </div>
  )
}
