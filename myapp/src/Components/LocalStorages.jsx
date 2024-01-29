import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function LocalStorages() {

    const [user, setUser] = useState({})
    let nav = useNavigate()

    const HandleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    console.log(user);
    
    const handleSubmit = () => {
        let user_id = 101
        let old = localStorage.getItem("Users")

        old = JSON.parse(old) || []

        if(old){
          if(old.length==0 || old.length==null){
            user_id= 101
          }
          else{
            user_id = old[old.length-1].user_id+1
          }
        }
        let newuser = {
          user_id : user_id,
          name: user.name,
          phone: user.phone,
          email: user.email
        }
        const alldata = [...old, newuser]
       
        localStorage.setItem("Users", JSON.stringify(alldata))
        nav('/View')
    }

  return (
    <div>
      <h1 style={{color:'white', backgroundColor: "blue"}}>Local Storage</h1>
        <h3>Insert</h3>
        <input type="text" onChange={HandleChange} name='name' placeholder='Enter your name' /><br/><br/>
        <input type="number" onChange={HandleChange} name='phone'  placeholder='Enter your number' /><br/><br/>
        <input type="email" onChange={HandleChange} name='email' placeholder='Enter your email' /><br/><br/>
        <button onClick={handleSubmit}>Insert</button>

    </div>
  )
}
