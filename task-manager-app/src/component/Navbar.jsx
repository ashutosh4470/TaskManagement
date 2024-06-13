import React, { useState } from 'react';
import Info from '../Info';

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <nav className="bg-customColor  py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-auto   ">
          <div className="text-white font-bold text-xl ">Task Manager</div>
          <div>
            <button className="text-white hover:text-gray-200 mr-4">Home</button>
            <button onClick={toggleInfo} className="text-white hover:text-gray-200">About</button>
          </div>
        </div>
      </div>
      {showInfo && <Info onClose={toggleInfo} />}
    </nav>
  );
};

export default Navbar;
