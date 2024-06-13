const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const taskController = require('./controllers/taskController'); // Import taskController module

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Use task routes
app.use('/api/tasks', taskRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });