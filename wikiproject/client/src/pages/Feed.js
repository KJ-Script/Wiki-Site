import React from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();

  const routeToGenerator = () => {
    navigate("/create");
  };
  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            routeToGenerator();
          }}
          className="bg-white px-[1%] py-[0.6%] rounded-[80px] text-black text-semibold mx-[10%] my-4 hover:px-[2%] hover:py-[0.5%] hover:duration-75 hover:bg-blue-400 hover:text-white justify-end"
        >
          Create +{" "}
        </button>
      </div>
      <div className="border shadow-sm px-[3%] py-[1%] rounded-lgdsax mx-[10%] bg-gray-100 text-black font-sans flex-col border-solid rounded-xl">
        Feed goes here
      </div>
    </div>
  );
}

export default Feed;
