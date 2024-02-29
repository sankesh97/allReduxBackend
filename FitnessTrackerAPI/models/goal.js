const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    name: String,
    description: String,
    targetCalories: Number,
    targetDate: Date,
    Status: {
        type: String,
        enum: ['In Progress', 'Achieved', 'Abandoned']
    }
})

const Goal = mongoose.model('Goal', goalSchema)

module.exports = { Goal }