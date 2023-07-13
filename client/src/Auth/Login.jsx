import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    return(
        <div className="loginbox">
        <img src="avtar.png" className="avatar"/>
        <h1>Login Here</h1>
        <form>
            <p>Username</p>
            <input type="text" name="" placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <input type="submit" name="" value="Login"/>
            <a href="/">Forget password?</a><br/>
            <p onClick={()=>navigate("/register")} >Don't have an account?</p>
        </form>
    </div>
    );
}

export default Login