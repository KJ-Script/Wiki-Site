import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = () => {
    axios
      .post("http://localhost:8080/createUser", {
        username,
        password,
      })
      .then((response) => {
          alert("account created");
          navigate("/signin");
      });
  };

  return (
    <div>
      <h1 class="flex justify-center text-xl">Create an Account</h1>
      <div className="flex justify-center my-[4%]">
        <div>
          <label className="mx-[10px]">username:</label>
          <input
            className="rounded-md px-2"
            type="text"
            palceholder="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <label className="mx-[10px]">password:</label>
          <input
            className="rounded-md px-2"
            type="password"
            palceholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <button
            className="w-[30%] h-[30px] bg-cyan-600 text-white mx-[30%]"
            onClick={createUser}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
