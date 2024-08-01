const Task = require('../db/models/task');

const createTask = async (req, res) => {
    try {
        const { title, isCompleted, description, time, date, isNotificationEnabled, repeatDays } = req.body;
        const { userId } = req.params;

        const task = new Task({
            title,
            isCompleted,
            description,
            time,
            date,
            isNotificationEnabled,
            repeatDays,
            user: userId,
        });

        await task.save();

        res.status(200).json({ message: 'Task created:', task });
    } catch (err) { 
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = {createTask};
