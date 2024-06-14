import { useState, useEffect } from 'react';
import taskService from '../services/taskService';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await taskService.getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      const createdTask = await taskService.createTask(newTask);
      setTasks(prevTasks => [...prevTasks, createdTask]); // Update state using the previous state
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id)); // Update state using the previous state
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const task = await taskService.updateTask(updatedTask);
      setTasks(prevTasks =>
        prevTasks.map(t => (t.id === task.id ? task : t))
      ); 
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  return { tasks, addTask, deleteTask, updateTask };
};

export default useTasks;
