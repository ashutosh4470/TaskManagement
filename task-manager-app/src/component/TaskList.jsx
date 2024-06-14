import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul className="divide-y divide-gray-200">
        {tasks.map(task => (
          <li key={task.id} className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
              <p className="text-sm text-gray-500">{task.completed}</p>
              <div>
                <button 
                  onClick={() => onEdit(task)} 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(task.id)} 
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
