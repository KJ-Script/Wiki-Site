import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [settingList, setSettingList] = useState([])

  const routeToGenerator = () => {
    navigate("/create");
  };

  useEffect(() => {
    axios.get('http://localhost:8080/display/setting').then((response) => {
      setSettingList(response.data)
    })
  }, []);

  console.log(">>>>>>>>>>>>>>>", tab);

  return (
    <div>
      <div className="mx-[10%] flex justify-between">
        <button
          className=" w-[33%] px-[3%] py-[1%] bg-gray-100 text-black font-sans flex-col border-solid rounded-l-xl hover:duration-100 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
          onClick={() => {
            setTab(1);
          }}
        >
          ARC
        </button>
        <button
          className=" w-[33%] px-[3%] py-[1%] bg-gray-100 text-black font-sans flex-col border-solid hover:duration-100 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
          onClick={() => {
            setTab(2);
          }}
        >
          CHARACTER
        </button>
        <button
          className=" w-[33%] px-[3%] py-[1%] bg-gray-100 text-black font-sans flex-col border-solid rounded-r-xl hover:duration-100 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
          onClick={() => {
            setTab(3);
          }}
        >
          SETTING
        </button>
      </div>
      <div className="border shadow-sm px-[3%] py-[1%] rounded-lgdsax mx-[10%] bg-gray-100 text-black font-sans flex-col border-solid rounded-xl my-4 max-h-[575px]">
        {tab === 1 ? <div>Arc goes here</div> : <div></div>}

        {tab === 2 ? <div>Character goes here</div> : <div></div>}

        {tab === 3 ? 
          <div>{settingList.map((setting, index) => {
            return (
              <div>
                <div>{setting.name}</div>
                <div>{setting.age}</div>
                <div>{setting.environment}</div>
                <div>{setting.aliases}</div>
                <div>{setting.association}</div>
              </div>
            )
          })}</div> 
            : 
          <div></div>}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            routeToGenerator();
          }}
          className="bg-white px-[1%] py-[0.6%] rounded-[80px] text-black text-semibold mx-[10%] my-2 hover:px-[2%] hover:duration-200 hover:bg-blue-400 hover:text-white justify-end"
        >
          Create +{" "}
        </button>
      </div>
    </div>
  );
}

export default Feed;
