import React from 'react';

const Info = ({ onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-2">Name: Ashutosh Mahale</p>
            <p className="text-lg mb-2">Age: 23</p>
            <p className="text-lg mb-2">Occupation: Software Developer Intern/Fresher</p>
            <p className="text-lg mb-2">Education: MSc Computer Science + CDAC PG-DAC (CDAC ACTS Bangalore)</p>
            <p className="text-lg mb-2">Location: Nashik/Pune</p>
            <p className="text-lg">Interests: Swimming, Programming, etc</p>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
