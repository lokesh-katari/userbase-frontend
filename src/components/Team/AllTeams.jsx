import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getAllteams } from '../../features/Team/team';
import { Link } from 'react-router-dom';

const AllTeams = () => {
    
    const team = useSelector((state) => state.team.Allteams);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllteams());
    }
    , [dispatch]);

  return (
   <>
    <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-36">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Team Members</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Users
              
            </p>
          </div>
          
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                     
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>

                     
                     
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    { team && Array.isArray(team)  && team?.map((team) => (
                      <tr key={team.name}>
                       
                        <Link to={`/allteams/${team._id}`}>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{team.name}</div>
                        
                        </td>
                        </Link>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          <div className="text-sm text-gray-700">Team members : {team?.members?.length}</div>
                          </span>
                        </td>
                        
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
   
   </>
  )
}

export default AllTeams