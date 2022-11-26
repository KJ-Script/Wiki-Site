import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


function SignInPage() {

    const [userList, setUserList] = useState([]);
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
  
    const [lUserName, setSName] = useState("")
    const [lpassword, setSPassword] = useState("")
  
  
    useEffect(() => {
      axios.get("http://localhost:8080/users").then((response) => {
        setUserList(response.data);
      });
    }, []);
  
    const createUser = () => {
      axios.post("http://localhost:8080/createUser", {
        username,
        password,
      }).then((response) => {
        alert("Account created")
      })
    }
  
    const SignIn = () => {
      const account = userList.filter((l) => {
        return l.username === lUserName && l.password === lpassword
      })
      console.log(account)
    }
  
  return (
<div>
      <div>
        {userList.map((user, index) => {
          return (
            <div>
              <p>{user.id}</p>
              <p>{user.username}</p>
            </div>
          );
        })}
      </div>

      <p> create account </p>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={createUser}>Create</button>
      </div>

      <p> SignIn </p>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setSName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setSPassword(e.target.value);
          }}
        />
        <button className="bg-red-600" onClick={SignIn}>Create</button>
      </div>
    </div>
  )
}

export default SignInPage