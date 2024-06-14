import React, { useState } from 'react';
import useTasks from './hooks/useTasks';
import Navbar from './component/Navbar';
import TaskList from './component/TaskList';
import TaskModal from './component/TaskModal';
import EditTaskModal from './component/EditTaskModal';
import Footer from './component/Footer';

function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = () => {
    setShowAddModal(true);
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowEditModal(true);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleUpdateTask = (updatedTask) => {
    updateTask(updatedTask);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Task Management Application</h1>
        <button onClick={handleAddTask} className="bg-customColor text-white py-2 px-4 rounded-lg mb-4">Add Task</button>
        {showAddModal && (
          <TaskModal
            onSubmit={(task) => {
              addTask(task);
              setShowAddModal(false);
            }}
            onCancel={() => setShowAddModal(false)}
          />
        )}
        {showEditModal && (
          <EditTaskModal
            isOpen={showEditModal}
            onClose={() => setShowEditModal(false)}
            task={currentTask}
            onSave={(updatedTask) => {
              handleUpdateTask(updatedTask);
              setShowEditModal(false);
            }}
          />
        )}
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
