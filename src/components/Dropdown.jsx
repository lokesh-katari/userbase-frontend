import React, { useState } from 'react';

const Dropdown = ({ options, title,onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionChange(option);
  };

  return (
    <div className="relative w-max m-3 bg-slate-100 rounded-lg">
      <button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption : title}</span>
        <svg
          className="ml-2 fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute r mt-2 w-48 bg-white m-6  shadow-lg z-10 rounded-lg ">
          {options.map((option, index) => (
            <button
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;