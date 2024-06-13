// src/controllers/taskController.js

const fs = require('fs');
const Task = require('../models/Task');

let tasks = [];

// Load tasks from tasks.json if it exists
function loadTasks(callback) {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading tasks.json:', err);
            return;
        }
        tasks = JSON.parse(data);
        callback();
    });
}

// Get all tasks
const getAllTasks = async () => {
    return tasks;
};

// Create a new task
const createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task(Date.now().toString(), title, description);
    tasks.push(newTask);
    saveTasks();
    res.json(newTask);
};

// Update a task by ID
const updateTask = (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks[index].title = title;
        tasks[index].description = description;
        saveTasks();
        res.json(tasks[index]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Delete a task by ID
const deleteTask = (req, res) => {
    const taskId = req.params.id;
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    res.json({ message: 'Task deleted' });
};

function saveTasks() {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2), 'utf8');
}

// Load tasks before starting the server
loadTasks(() => {
    console.log("Tasks loaded:", tasks);
});

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
