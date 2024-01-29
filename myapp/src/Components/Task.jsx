import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Task() {
    const [User, setUser] = useState({})
    const nav = useNavigate()
    const handleChange = (e) => {
        setUser({...User, [e.target.name]:e.target.value})
        console.log(User);
    }

    const handleSubmit = () => {
        let userId = 101
        let old = localStorage.getItem("Users")
        old = JSON.parse(old) || []

        if(old)
        {
            if (old.length==0 || old.length==null)
            {
                userId=101;
            }
            else{
                userId = old[old.length-1].userId+1
            }
        }
        let newUser= {
            userId: userId,
            name: User.name,
            phone: User.phone,
            email: User.email,
            salary: User.salary

        }
        const alldata = [...old, newUser]
        localStorage.setItem("Users", JSON.stringify(alldata))
        nav('/Employee')
    }
  return (
    <div>
        <h1 style={{backgroundColor: "blue", color: "white", padding:"10px"}}>Employee Management Page</h1>
        <TextField id="outlined-basic" onChange={handleChange} label="Enter you name" type='text' name='name' variant="outlined" /><br/><br/>
        <TextField id="outlined-basic"  onChange={handleChange} label="Enter you phone number" name='phone' type='number' variant="outlined" /><br/><br/>
        <TextField id="outlined-basic"  onChange={handleChange} label="Enter your email id" name='email' type='email' variant="outlined" /><br/><br/>
        <TextField id="outlined-basic"  onChange={handleChange} label="Enter your salary" name='salary' type='number' variant="outlined" /><br/><br/>
        <Button onClick={handleSubmit} variant="contained">Insert</Button>
        
        

    </div>
  )
}
