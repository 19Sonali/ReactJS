import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Home() {
  
  const mystye ={
    fontSize: "20px",
    fontFamily: "Times New Roman",
    margin: "20px",
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  }

  return (
    <div><h1 style={{color:'white', backgroundColor: "purple"}}>Home Component</h1>
      <br/>
      {/* Routing */}
      {/* To = the routing path given in router component */}
      
      <Link to="/Arrow" > <Button variant="outlined" color='secondary' sx={mystye}>Arrow Function</Button></Link> 
      <Link to="/Array" > <Button variant="outlined" color='secondary' sx={mystye}>Array Methods</Button></Link> 
      <Link to="/Variables" > <Button variant="outlined"color='secondary' sx={mystye}>Variable</Button></Link> 
      <Link to="/props" > <Button variant="outlined" color='secondary' sx={mystye}>Props</Button></Link> 
      <Link to="/Destructuring" > <Button variant="outlined" color='secondary' sx={mystye}>Destructuring Methods</Button></Link> 
      <Link to="/test" > <Button variant="outlined" color='secondary' sx={mystye}>Test</Button></Link> 
      <Link to="/events" > <Button variant="outlined" color='secondary' sx={mystye}>Events</Button></Link> 
      <Link to="/Usestate" > <Button variant="outlined" color='secondary' sx={mystye}>UseState</Button></Link> 
      <Link to="/Useeffect" > <Button variant="outlined" color='secondary' sx={mystye}>UseEffect</Button></Link>
      <Link to="/LocalStorage" > <Button variant="outlined" color='secondary' sx={mystye}>Local Storage</Button></Link>
      <Link to="/View" > <Button variant="outlined" color='secondary' sx={mystye}>View</Button></Link>
      <Link to="/Task" > <Button variant="outlined" color='secondary' sx={mystye}>Task</Button></Link>
      <Link to="/Calculator" > <Button variant="outlined" color='secondary' sx={mystye}>Calculator</Button></Link>
      {/* random link or path shoould give page not found error  */}
      
      <Link to="/nonexistent" > <Button variant="outlined" color='secondary' sx={mystye}>Random</Button></Link>
      {/* versal  - host */}
    </div>

  )
}
