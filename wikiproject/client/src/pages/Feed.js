import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const routeToGenerator = () => {
    navigate("/create");
  };

  console.log(">>>>>>>>>>>>>>>", tab);

  return (
    <div>
      <div className="mx-[10%] flex justify-between">
        <button
          className=" w-[33%] border shadow-sm px-[3%] py-[1%] bg-gray-100 text-black font-sans flex-col border-solid rounded-l-xl hover:duration-100 hover:bg-gray-200 focus:bg-gray-200"
          onClick={() => {
            setTab(1);
          }}
        >
          Arc
        </button>
        <button
          className=" w-[33%] border shadow-sm px-[3%] py-[1%] bg-gray-100 text-black font-sans flex-col border-solid hover:duration-100 hover:bg-gray-200 focus:bg-gray-200"
          onClick={() => {
            setTab(2);
          }}
        >
          Character
        </button>
        <button
          className=" w-[33%] border shadow-sm px-[3%] py-[1%] bg-gray-100 text-black font-sans flex-col border-solid rounded-r-xl hover:duration-100 hover:bg-gray-200 focus:bg-gray-200"
          onClick={() => {
            setTab(3);
          }}
        >
          Setting
        </button>
      </div>
      <div className="border shadow-sm px-[3%] py-[1%] rounded-lgdsax mx-[10%] bg-gray-100 text-black font-sans flex-col border-solid rounded-xl my-4">
        {tab === 1 ? <div>Arc goes here</div> : <div></div>}

        {tab === 2 ? <div>Character goes here</div> : <div></div>}

        {tab === 3 ? <div>Setting goes here</div> : <div></div>}
      </div>
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
    </div>
  );
}

export default Feed;
