import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostGenerator() {
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const routeToFeed = () => {
    setType("");
    navigate('/home')
  };

  return (
    <div className="w-[100%]">
      <h1 className="mx-[40%] text-[30px] font-semibold">Create your {type}</h1>

      <div className="border shadow-sm px-[3%] py-[1%] rounded-lgdsax mx-[10%] bg-gray-100 text-black font-sans flex-col border-solid rounded-xl">
        <div className="flex justify-between">
          <select
            name="types"
            id="types"
            className="p-2 bg-blue-400 text-white"
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option
              value="character"
              onClick={(e) => {
                setType(e.target.value);
              }}
            >
              Character
            </option>
            <option
              value="setting"
              onClick={(e) => {
                setType(e.target.value);
              }}
            >
              Setting
            </option>
            <option
              value="arc"
              onClick={(e) => {
                setType(e.target.value);
              }}
            >
              Arc/Story
            </option>
          </select>

          <button
            className="bg-blue-400 px-[1%] py-[0.6%] rounded-lg text-white text-semibold "
            onClick={() => {
              routeToFeed()
            }}
          >
            Cancel
          </button>
        </div>

        {/* Story Section */}
        {type === "arc" ? (
          <div className="justify-between">
            <input
              type="text"
              placeholder={"title/name"}
              className="my-4 p-[1%] rounded-md"
            />
            <div className="">
              {/* For story */}
              <textarea
                type="textarea"
                placeholder={"Story"}
                className="p-[1%] rounded-md"
                rows="15"
                cols="90"
              />
              <button className="border shadow-sm px-[3%] py-[1%] mx-[1%] rounded-lg  bg-blue-400 text-white font-sans">
                Post
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {/* For Characer */}
        {type === "character" ? (
          <div className="">
            <div className="flex my-3">
              <input
                type="text"
                placeholder={"Name"}
                className="mx-1 p-[1%] rounded-md"
              />
              <input
                type="text"
                placeholder={"Age"}
                className="mx-1 p-[1%] rounded-md"
              />
              <textarea
                type="text"
                placeholder={"Abilities"}
                className="mx-1 p-[1%] rounded-md"
              />
              <textarea
                type="text"
                placeholder={"Aliases"}
                className="mx-1 p-[1%] rounded-md"
              />
              <textarea
                type="text"
                placeholder={"Associations"}
                className="mx-1 p-[1%] rounded-md"
              />
            </div>
            <button className="border shadow-sm px-[2%] py-[0.6%] mx-[94%] rounded-lg  bg-blue-400 text-white font-sans">
              Post
            </button>
          </div>
        ) : (
          <div></div>
        )}

        {/* For setting */}
        {type === "setting" ? (
          <div>
            <div className="flex my-3">
              <input
                type="text"
                placeholder={"Name"}
                className="mx-1 p-[1%] rounded-md"
              />
              <input
                type="text"
                placeholder={"Age"}
                className="mx-1 p-[1%] rounded-md"
              />
              <input
                type="text"
                placeholder={"Environment"}
                className="mx-1 p-[1%] rounded-md"
              />
              <textarea
                type="text"
                placeholder={"Aliases"}
                className="mx-1 p-[1%] rounded-md"
              />
              <textarea
                type="text"
                placeholder={"Associations"}
                className="mx-1"
              />
            </div>
            <button className="border shadow-sm px-[2%] py-[0.6%] mx-[94%] rounded-lg  bg-blue-400 text-white font-sans">
              Post
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default PostGenerator;
