import React from "react";
import { Link } from "react-router-dom";

function NavBar({ isLogged }) {
  return (
    <nav class="flex font-outfit bg-white rounded-[50px] w-[60%] h-[50px] mx-auto my-[2%]">
      <div className="w-[60%] mx-auto flex justify-between my-auto h-full">
        <Link
          to={"/home"}
          className="hover:bg-emerald-600 hover:text-white h-full px-4"
        >
          <p className="my-3">HOME</p>
        </Link>
        {isLogged ? (
          <Link
            to={"/create"}
            className="hover:bg-emerald-600 hover:text-white h-full px-4"
          >
            <p className="my-3">CREATE</p>
          </Link>
        ) : (
          <></>
        )}
        <Link
          to={"/about"}
          className="hover:bg-emerald-600 hover:text-white h-full px-4"
        >
          <p className="my-3">ABOUT</p>
        </Link>
        <Link
          to={"/rules"}
          className="hover:bg-emerald-600 hover:text-white h-full px-4"
        >
          <p className="my-3">RULES</p>
        </Link>
        <Link
          to={"/contact"}
          className="hover:bg-emerald-600 hover:text-white h-full px-4"
        >
          <p className="my-3">CONTACT US</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
