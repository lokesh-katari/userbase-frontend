import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";
	

import { emptyTeam,removeFromTeam } from "../../features/Team/team";
import { baseUrl } from "../..";
const Team = () => {
  const dispatch = useDispatch();
  let team = useSelector((state) => state.team.selectedTeam);
 
  const [users, setMembers] = useState(team);
  const [teamname, setTeamname] = useState(team);
  // const totalPrice=products.map((item)=>item.price*item.qty)
  // console.log(totalPrice);
  // console.log();
  const handleCreateTeam = async() => {
    if (teamname) {
      console.log(users);
      let {data} =await axios.post(`${baseUrl}/api/team`, {
        name:teamname,
        members: users,
      });
      // console.log(data);
      // localStorage.removeItem("selectedTeam");
      dispatch(emptyTeam());
      alert("Team Created Successfully");
    } else {
     alert("Please Enter Team Name");
    }
  };
 
  useEffect(() => {
  
  let data = localStorage.getItem("selectedTeam");
  if (data) {
    setMembers(JSON.parse(data));
  }
  
   
  }, [team])

  return (
    <>  
    <div className="mx-auto  mt-28 grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
     {users && Array.isArray(users) &&users?.map((user, i) => (
        <div key={i} className="rounded-md border">
          <img
            src={user.avatar}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{user.first_name+" "+user.last_name}</h1>
            <p className="mt-3 text-sm text-gray-600">
            {user.email}
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
               {user.domain}
              </span>

            </div>
            <button
              type="button"
              onClick={() => dispatch(removeFromTeam(user._id))}
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Remove from Team
            </button>
          </div>
        </div>
      ))}
      </div>
      <div>
      {users.length>0? <>
      <h1 className="text-center text-3xl">Enter Team name:</h1>
     <div className="flex justify-center items-center  flex-col">
     <input type="text" onChange={(e)=>setTeamname(e.target.value)} className="border-2 border-black" />
        <Link to="/allteams">
            <button onClick={handleCreateTeam} className="mt-4 w-max rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Create Team
            </button>
        </Link>
     </div>
        </>
         :<>
         <div className="flex flex-col justify-center items-center">
         <h1 className="mt-4 w-max text-center  rounded-sm px-2 py-1.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Team is empty</h1>
          <Link to="/">
            <button  className="mt-4 w-max rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              GO TO Create Team
            </button>
        </Link>
         </div>
          </>}
      </div>
    </>
  );
};

export default Team;
