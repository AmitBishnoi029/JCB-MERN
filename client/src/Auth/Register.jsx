import React, { useState } from "react";
import axios from "axios"

const initial = {
    username:"",
    email:"",
    contact:"",
    password:""
}
const PORT = "http://localhost:8000"

function Register(){
    const [user,setUser] = useState(initial);
    // const[username,setUSername]=useState("")
    // const[email,setEmail]=useState("")
    // const[contact,setContact]=useState("")
    // const[password,setPassword]=useState("")

    const onchangeHandler = (e) =>{
       setUser({...user,[e.target.name]:e.target.value})
    // setUSername(e.target.value)
    // setEmail(e.target.value)
    // setContact(e.target.value)
    // setPassword(e.target.value)
    }
    const onclickHandler = async(e)=>{
    e.preventDefault()
    // const formData = new FormData()
    // formData.append("username",username)
    // formData.append("email",email)
    // formData.append("contact",contact)
    // formData.append("password",password)
try {
    console.log("hit api : ",PORT);
    const resp = await axios.post(`${PORT}/auth/register`,user).then((response)=>response.data);
    console.log("response of register : ",resp);
} catch (error) {
    console.log("Error while registering API",error.message);
}

    }
    return (
        <div className="loginbox">
        <img src="avtar.png" alt="not found" className="avatar"/>
        <h1>Register Here</h1>
        <form>
            <p>Username</p>
            <input type="text" name="username"  onChange={onchangeHandler}  placeholder="Enter Username"/>
            <p>E-mail</p>
            <input type="password" name="email"  onChange={onchangeHandler}  placeholder="Enter Password"/>
            <p>Contact</p>
            <input type="text" name="contact"  onChange={onchangeHandler} placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="password"  onChange={onchangeHandler} placeholder="Enter Password"/>
            <input type="submit" name="submit" onClick={onclickHandler} value="Register" />
        </form>
    </div>
    );
}

export default Register