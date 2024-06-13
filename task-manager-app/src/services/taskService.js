import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const getAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
};

const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create task');
  }
};

const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update task');
  }
};

const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete task');
  }
};

export default {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
