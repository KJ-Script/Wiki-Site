import React from 'react'
import git from "../images/github.svg";
import instagram from "../images/instagram.svg";
import telegram from "../images/telegram.svg";

function Footer() {
  return (
    <div className="flex justify-end">
  <div className="w-[4%]">
    <img className="w-[40%]" src={instagram}></img>
    <img className="w-[40%] py-1" src={git}></img>
    <img className="w-[40%]" src={telegram}></img>
  </div>
</div>
  )
}

export default Footer