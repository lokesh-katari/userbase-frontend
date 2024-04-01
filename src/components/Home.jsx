import React from 'react'
import { useSelector, useDispatch } from "react-redux"; 
import { useState } from 'react';
import { useEffect } from 'react';
import Filter from './Filter';
import Pagination from "@mui/material/Pagination";
import { ToastContainer,toast } from "react-toastify";
import { addToTeam } from '../features/Team/team';
import { UserDetailsbyFilter } from '../features/User/UserSlice';
const Home = () => {
  const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [Cpage, setPage] = useState(1);
    const userSlice = useSelector((state) => state.userSlice.userData);
    console.log(userSlice,"userSlice");
    useEffect(() => {
    
    setUsers(userSlice);
   
    console.log("cureent page",Cpage);
      }
    , [userSlice,Cpage]);
    const handlePageChange = (event, value) => {
      setPage(value);
      dispatch(UserDetailsbyFilter({url:`page=${value}`}));
    };
    

  return (
    <>
            <Filter/>
           
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      
      {users.map((user, i) => (
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
              onClick={() => {dispatch(addToTeam(user))
              toast.success("User Added to Team");}}
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Team
            </button>
           
          </div>
        </div>
      ))}
    </div>
    <div className="text text-white flex justify-center items-center py-6  ">
              <Pagination
                size="large"
                variant="outlined"
                color="primary"
                className=""
                count={Math.ceil(1000/ 20)}
                page={Cpage}
                onChange={handlePageChange}
              />
            </div>
    </>
  )
}

export default Home