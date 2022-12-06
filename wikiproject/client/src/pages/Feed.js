import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed({ isLogged }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [settingList, setSettingList] = useState([]);

  const routeToGenerator = () => {
    navigate("/create");
  };

  useEffect(() => {
    axios.get("http://localhost:8080/display/setting").then((response) => {
      setSettingList(response.data);
    });
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
      <div className="border shadow-sm px-[3%] py-[1%] rounded-lgdsax mx-[10%] bg-gray-100 text-black font-sans flex-col border-solid rounded-xl my-4 max-h-[575px] overflow-scroll">
        {tab === 1 ? <div>Arc goes here</div> : <div></div>}

        {tab === 2 ? <div>Character goes here</div> : <div></div>}

        {tab === 3 ? (
          <div>
            {settingList.map((setting, index) => {
              return (
                <div className=" m-4 p-4 bg-slate-200 shadow-xl flex justify-between">
                  <div className="flex">
                    <div className="">
                      <p className="my-1">Place Name</p>
                      <p className="my-1">Place Age</p>
                      <p className="my-1">Place Environment</p>
                      <p className="my-1">Aliases</p>
                      <p className="my-1">Setting Association</p>
                    </div>
                    <div class="w-[0.2%] bg-emerald-900 mx-3"> </div>
                    <div>
                      <p className="my-1">{setting.placeName}</p>
                      <p className="my-1">{setting.age}</p>
                      <p className="my-1" about>
                        {setting.environment}
                      </p>
                      <p className="my-1">{setting.aliases}</p>
                      <p className="my-1">{setting.association}</p>
                    </div>
                  </div>
                  {isLogged ? (
                    <div className="flex">
                      <div className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </div>

                      <div className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {isLogged ? (
        <div className="flex justify-end">
          <button
            onClick={() => {
              routeToGenerator();
            }}
            className="bg-white px-[1%] py-[0.6%] rounded-[80px] text-black text-semibold mx-[10%] my-2 hover:px-[2%] hover:duration-200 hover:bg-emerald-700 hover:text-white justify-end"
          >
            Create +{" "}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Feed;
