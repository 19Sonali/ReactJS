import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams, json } from 'react-router-dom';

export default function Edit1() {
    let {item} = useParams()
    // console.log(item)
    // to navigate back to the view page after editing 
    let nav = useNavigate()

    const [user, setUser] = useState({})
    
    useEffect (()=>{
        // to get data from local storage
        let data= JSON.parse(localStorage.getItem("Users"))
        // data = JSON.parse(data)
        let single_data =  data.filter((value,i)=>{
            
            return i == item
            
        })

        console.log(single_data, 1111)
        setUser (...single_data)
    }, [])

    console.log(user, 2222)
    const HandleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const Edit = () => {
        // convert string to object and get data
        let data= JSON.parse(localStorage.getItem("Users"))
        // 
        data.splice(item, 1, user)
        console.log(data);
        localStorage.setItem("Users", JSON.stringify(data))
        nav('/Employee')

    }

  return (
    <div>
        <h1 style={{color: "blue", fontSize: "40px"}}>Edit</h1>
         <br/>
        <TextField id="outlined-basic"  value={user.name} onChange={HandleChange} name='name' label="Enter your name" size='small' variant="outlined" /> <br/><br/>
        <TextField id="outlined-basic" value={user.phone} onChange={HandleChange} label="Enter your Phone" name='phone' size='small' variant="outlined" /> <br/><br/>
        <TextField id="outlined-basic" value={user.email} onChange={HandleChange} label="Enter your Email" name='email' size='small' variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" value={user.salary} onChange={HandleChange} label="Enter your Salary" name='salary' size='small' variant="outlined" /><br/><br/>
        <Button onClick={Edit} variant="outlined">Edit</Button>
    </div>
  )
}