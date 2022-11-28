import React, { useEffect, useState } from "react";
import PostCreator from "../components/PostCreator";

function Feed() {
    
    const [type, setType] = useState("character")
    const [create, setCreate] = useState(false)

  const createPost = () => {
    return <PostCreator />;
  };

  const setValue = value => {
    setType(value)
  }
  return (
    <>
      <h1 className="mx-[50%] text-[30px] font-semi-bold">Feed</h1>
      { 
        create ? 
      <div className="border shadow-sm px-[3%] py-[1%] rounded-lgdsax mx-[10%] bg-white text-black font-sans flex-col border-solid">
        {/* Title */}
        <div className="flex justify-between"><p>Create a {type}</p> <button className="bg-blue-400 px-[1%] py-[0.6%] rounded-lg text-white text-semibold " onClick={()=> {setCreate(false)}}>cancel</button></div>
        {/* General Options */}
        <div className="my-2">
          <input type="text" placeholder={"title/name"} className="mx-3" />
          <select name="types" id="types">
            <option value="character" onClick={ e => {setType(e.target.value)}} >Character</option>
            <option value="world" onClick={ e => {setType(e.target.value)}}>World</option>
            <option value="arc" onClick={ e => {setType(e.target.value)}}>Arc/Story</option>
          </select>
        </div>
        {
            type === 'arc' ? 
        <div>
          {/* For story */}
          <textarea
            type="textarea"
            placeholder={"Story"}
            className="p-[1%]"
            rows="20"
            cols="90"
          />
          <button className="border shadow-sm px-[3%] py-[1%] mx-[1%] rounded-lg  bg-blue-400 text-white font-sans">
            Post
          </button>
        </div>
            : 
            <div></div>
        }

        {
             type === 'character' ? 

        <div>
          {/* For Characer */}
          <input type="text" placeholder={"Name"} className="mx-1"/>
          <input type="text" placeholder={"Age"} className="mx-1"/>
          <textarea type="text" placeholder={"Abilities"} className="mx-1"/>
          <textarea type="text" placeholder={"Aliases"} className="mx-1"/>
          <textarea type="text" placeholder={"Associations"} className="mx-1"/>

          <button className="border shadow-sm px-[2%] py-[0.5%] mx-[1%] rounded-lg  bg-blue-400 text-white font-sans">
            Post
          </button>
        </div>
             : 
             <div></div>
        }

        {
             type === 'world' ?
        <div>
          {/* For World */}
          <input type="text" placeholder={"Name"} className="mx-1"/>
          <input type="text" placeholder={"Age"} className="mx-1"/>
          <input type="text" placeholder={"Environment"} className="mx-1"/>
          <textarea type="text" placeholder={"Aliases"} className="mx-1"/>
          <textarea type="text" placeholder={"Associations"} className="mx-1"/>
          <button className="border shadow-sm px-[2%] py-[%] mx-[1%] rounded-lg  bg-blue-400 text-white font-sans">
            Post
          </button>
        </div> :
        <div></div>
        }

      </div> 
      :
      <div></div>
      }


      <button className="border shadow-sm px-[3%] py-[1%] rounded-lg my-[20%] mx-[10%] bg-white text-black font-sans" onClick={() => {setCreate(true)}}>
        Create +{" "}
      </button>
    </>
  );
}

export default Feed;
