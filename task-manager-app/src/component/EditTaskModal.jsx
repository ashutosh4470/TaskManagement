import React, { useState, useEffect } from 'react';

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [editedTask, setEditedTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (task) {
      setEditedTask({ title: task.title, description: task.description });
    }
  }, [task]);

  const handleSave = () => {
    onSave({ ...task, ...editedTask });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            name="title"
            value={editedTask.title} 
            onChange={handleChange} 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            name="description"
            value={editedTask.description} 
            onChange={handleChange} 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex justify-end">
          <button 
            onClick={onClose} 
            className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
