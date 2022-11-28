import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function LogInpage() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const validateUser = () => {
        axios.post("http://localhost:8080/validate", {
            username,
            password,
        }).then((response) => {
            console.log('response: ', response.data)
            const account = response.data
            if(account.status === "ok") {
              alert("Logged In")
              navigate('/home')
              
            } else {
              alert("Try again")
            }
        })
    }

  return (
    <div>
      <h1 class="flex justify-center text-xl">LogIn</h1>
      <div className="flex justify-center my-[4%]">
        <div>
          <label className="mx-[10px]">username:</label>
          <input
            className="rounded-md px-2"
            type="text"
            palceholder="username"
            onChange={(e) => {
                setUserName(e.target.value)
            }}
          ></input>
          <br></br>
          <br></br>
          <label className="mx-[10px]">password:</label>
          <input
            className="rounded-md px-2"
            type="password"
            palceholder="password"
            onChange={(e)=> {
                setPassword(e.target.value)
            }}
          ></input>
          <br></br>
          <br></br>
          <button className="w-[30%] h-[30px] bg-cyan-600 text-white mx-[30%]" onClick={validateUser}> 
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInpage;
