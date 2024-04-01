import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { useDispatch } from "react-redux";
import { UserDetailsbyFilter } from '../features/User/UserSlice';


const Filter = () => {
    const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const handleSearch = () => {
    const filterObj = {
      gender: selectedGender,
      available: selectedAvailability,
      domain: selectedDomain,
      name: searchText,
    };
    console.log(filterObj);
    // You can use the filterObj for your filtering logic here
    const queryParams = Object.entries(filterObj)
        .filter(([, value]) => value !== null && value !== '')
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
  
      // Construct the URL with query parameters

      const queryString = new URLSearchParams(queryParams).toString();
      const url = `${queryString}`;
      console.log(url);
    dispatch(UserDetailsbyFilter({url}));
  };

  const handleGenderChange = (option) => {
    setSelectedGender(option);
  };

  const handleAvailabilityChange = (option) => {
    if (option === "Not Available") {
      option = false;
    }
    if (option === "Available") {
        option = true;
        }
    setSelectedAvailability(option);
  };

  const handleDomainChange = (option) => {
    setSelectedDomain(option);
  };

  return (
    <>
      <div className='mt-48 flex flex-col lg:flex-row md:flex-row'>
        <Dropdown
          options={["Female", "Male", "Agender", "Bigender"]}
          title={"Gender"}
          onOptionChange={handleGenderChange}
        />
        <Dropdown
          options={["Not Available", "Available"]}
          title={"Availability"}
          onOptionChange={handleAvailabilityChange}
        />
        <Dropdown
          options={["Business Development", "Management", "Finance", "Sales", "Marketing", "IT", "UI Designing"]}
          title={"Domain"}
          onOptionChange={handleDomainChange}
        />
      
                <input
                  type="text"
                  className="h-10 lg:w-max w-3/4 mt-3 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
               
             
        <button onClick={handleSearch} className='w-3/4 lg:w-max bg-blue-400 h-10 mt-3 ml-3 rounded-lg p-2 '>Search</button>
      </div>
    </>
  );
};

export default Filter;