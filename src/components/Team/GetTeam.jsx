import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getteam } from '../../features/Team/team';
const GetTeam = () => {
    const { id } = useParams();
  const dispatch = useDispatch();
  let users = useSelector((state) => state.team.team);

  useEffect(() => {
    dispatch(getteam({id}));

    }, [dispatch, id]);
  return (
    <div className='mt-44'>


        <h1 className='text-4xl text-center underline'>Team name :{users.name}</h1>
        <h1 className='text-3xl text-left'>Team Members</h1>
    
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {users && Array.isArray(users) && users?.members?.map((user, i) => (
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
           
           
           
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GetTeam