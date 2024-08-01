const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
    }, 
    time: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isNotificationEnabled: {
        type: Boolean,
        default: false,
    },
    repeatDays: {
        type: [String],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Task', taskSchema);
