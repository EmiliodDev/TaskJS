const Task = require('../db/models/task');

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        const deleteTask = await Task.findByIdAndDelete(taskId);

        if (!deleteTask) {
            return res.status(400).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports = {deleteTask};
