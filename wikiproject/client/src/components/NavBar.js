import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav class=" mx-[35%] pt-[3%] pb-[1%] flex justify-between text-xl font-outfit border-b border-b-gray-600">
    <Link to={"/home"} className="hover:bg-slate-600 hover:text-white py-[3%] px-[3%]">HOME</Link>
    <Link to={"/about"} className="hover:bg-slate-600 hover:text-white py-[3%] px-[3%]">ABOUT</Link>
    <Link to={"/signin"} className="hover:bg-slate-600 hover:text-white py-[3%] px-[3%]">SIGNIN</Link>
    <Link to={"/register"} className="hover:bg-slate-600 hover:text-white py-[3%] px-[3%]">SIGNUP</Link>
  </nav>
  )
}

export default NavBar