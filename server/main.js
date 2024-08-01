const express = require('express');
const bodyParser = require('body-parser');
const { connectToMongo } = require('./db/connectToMongo');
const { registerUser } = require('./auth/register');
const { loginUser } = require('./auth/login');
const { createTask } = require('./handlers/createTask');
const { updateTask } = require('./handlers/updateTask');
const { deleteTask } = require('./handlers/deleteTask');
const { getAllTasks } = require('./handlers/getAllTasks');
const User = require('./db/models/user');
const Task = require('./db/models/task');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connectToMongo()

app.post('/register', registerUser);
app.post('/login', loginUser);
app.post('/tasks/:userId', createTask);
app.put('/tasks/:taskId', updateTask);
app.delete('/tasks/:taskId', deleteTask);
app.get('/tasks', getAllTasks);

app.get("/", (req, res) => {
    res.send("Hello friend, welcome to luvto!");
})

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = server;
