import React from "react";
import { useNavigate } from "react-router-dom";

function MainBar({ isLogged, setIsLogged }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[80px] bg-emerald-900 flex justify-end">
      <div className="bg-white h-[38px] my-4">
        <input
          className="h-[30px] px-3 mx-4"
          placeholder="Search"
          type=""
          search
        />
        <button class="mr-4 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {isLogged ? (
        <div className="w-[13%] flex">
          <button
            className="w-[40%] h-[40px] bg-gray-200 mx-3 my-3 rounded-[50px] text-black hover:w-[55%] hover:py-[0.5%] hover:duration-100 hover:bg-emerald-700 hover:text-white hover:shadow-black hover:shadow-2xl"
            onClick={() => {
              navigate("/create");
            }}
          >
            CREATE +
          </button>
          <button
            className="w-[40%] h-[40px] bg-gray-200 mr-3 my-3 rounded-[50px] text-black hover:w-[55%] hover:py-[0.5%] hover:duration-100 hover:bg-emerald-700 hover:text-white hover:shadow-black hover:shadow-2xl"
            onClick={() => {
              setIsLogged(false);
              navigate("/signin");
            }}
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <div className="w-[13%] flex">
          <button
            className="w-[40%] h-[40px] bg-gray-200 mx-3 my-3 rounded-[50px] text-black hover:w-[55%] hover:py-[0.5%] hover:duration-100 hover:bg-emerald-700 hover:text-white hover:shadow-black hover:shadow-2xl"
            onClick={() => {
              navigate("/signin");
            }}
          >
            LOGIN
          </button>
          <button
            className="w-[40%] h-[40px] bg-gray-200 mr-3 my-3 rounded-[50px] text-black hover:w-[55%] hover:py-[0.5%] hover:duration-100 hover:bg-emerald-700 hover:text-white hover:shadow-black hover:shadow-2xl"
            onClick={() => {
              navigate('/register')
            }}
          >
            SIGNUP
          </button>
        </div>
      )}
    </div>
  );
}

export default MainBar;
