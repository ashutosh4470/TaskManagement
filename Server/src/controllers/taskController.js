const fs = require("fs");
const path = require("path");
const Task = require("../models/Task");

let tasks = [];

// Load tasks from tasks.json if it exists
function loadTasks(callback) {
  const filePath = path.join(__dirname, "../../tasks.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading tasks.json:", err);
      return;
    }
    tasks = JSON.parse(data);
    callback();
  });
}

// Get all tasks
async function getAllTasks(req, res) {
    try {
    //   console.log("Tasks:", tasks);
      res.json(tasks);
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ message: error.message });
    }
}

// Create a new task
const createTask = (req, res) => {
    const { title, description, completed } = req.body;
    const newId = (tasks.length > 0 ? parseInt(tasks[tasks.length - 1].id) + 1 : 1).toString();
    const newTask = new Task(newId, title, description, completed);
    tasks.push(newTask);
    saveTasks();
    res.json(newTask);
  };
  
  


// Update a task by ID
const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks[index].title = title;
    tasks[index].description = description;
    tasks[index].completed = completed;
    saveTasks();
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

// Delete a task by ID
const deleteTask = (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  res.json({ message: "Task deleted" });
};

function saveTasks() {
  const filePath = path.join(__dirname, "../../tasks.json");
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf8");
}

// Load tasks before exporting other functions
loadTasks(() => {
//   console.log("Tasks loaded:", tasks);
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
