const Task = require('../db/models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({ tasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = {getAllTasks};
