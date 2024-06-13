import React, { useState } from 'react';

const TaskModal = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (!title.trim() && !description.trim()) {
      setErrorMessage('Please enter a title and description for the task.');
      return;
    }
    setErrorMessage('');
    onSubmit({ title, description, completed });
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 className="text-3xl font-bold mb-4">Add Task</h1>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-4">
              <input className="mr-2 leading-tight" id="completed" type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
              <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="completed">Completed</label>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={handleSubmit} className="bg-customColor  text-white py-2 px-4 rounded-lg">Add Task</button>
            <button onClick={handleCancel} className="bg-neutral-500 text-white py-2 px-4 rounded-lg mr-2">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
