const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    duration: Number,
    caloriesBurned: Number
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = { Exercise }