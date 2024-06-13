import React, { useState } from 'react';
import useTasks from './hooks/useTasks';
import Navbar from './component/Navbar';
import TaskList from './component/TaskList';
import TaskModal from './component/TaskModal';
import Footer from './component/Footer';

function App() {
  const { tasks, addTask, deleteTask } = useTasks();
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Task Management Application</h1>
        <button onClick={handleAddTask} className="bg-customColor  text-white py-2 px-4 rounded-lg mb-4">Add Task</button>
        {showModal && (
          <TaskModal 
            onSubmit={addTask} 
            onCancel={handleCloseModal} 
          />
        )}
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
