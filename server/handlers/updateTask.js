const Task = require('../db/models/task');

const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title, isCompleted, description, time, date, isNotificationEnabled, repeatDays } = req.body;

        const updateTask = await Task.findByIdAndUpdate(
            taskId, {
                title,
                isCompleted,
                description,
                time,
                date,
                isNotificationEnabled,
                repeatDays,
            },
            { new: true },
        );

        if (!updateTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: "Task updated", task: updateTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = {updateTask};
