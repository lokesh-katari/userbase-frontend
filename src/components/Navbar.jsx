import React from "react";
import { useState } from "react";
import { Link,  } from "react-router-dom";
import { useDispatch,  } from "react-redux";

import { UserDetailsbyName } from "../features/User/UserSlice";


export const Navbar = () => {
  const dispatch = useDispatch();
 

  const [searchText, setsearchText] = useState("");

  
  // console.log(`this is from navbar${isLoggedIn}`);

  const submitSearch = (event) => {
    event.preventDefault();

   dispatch(UserDetailsbyName({name:searchText}));
    setsearchText("");
    
  };

  const handleSearch = (e) => {
    setsearchText(e.target.value.trim());
  };
  return (
    <div className=" fixed top-0 w-full overflow-hidden z-50 bg-gray-900 opacity-90">
      <nav className="  px-8 py-4 flex justify-between items-center border-y border-gray-400">
        <Link
          to="/"
          className="text-3xl font-bold leading-none flex items-center space-x-4"
        >
          <span className="text-white">
           
              {" "}
            User Base
          </span>
        </Link>
        <div className="">
          
        </div>
        <ul className=" lg:flex lg:items-center lg:justify-end md:flex md: mr-4 p-2">
        
          <li>
 
                      </li>
          <li>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <form action="" onSubmit={submitSearch}>
                <input
                  type="text"
                  className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search"
                  value={searchText}
                  onChange={handleSearch}
                />
                <button
                  type="submit"
                  disabled={searchText.trim() === "" ? true : false}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </li>
         
              <Link to={"/team"}>
                <div className="ml-4 text-white p-2">
                 Current Team
                </div>
              </Link>
              <Link to={"/allteams"}>
                <div className="ml-4 text-white p-2">
                 Allteams
                </div>
              </Link>
             
              <div className="ml-2">
              
              </div>
           
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
