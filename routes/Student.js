const mongoose = require('mongoose')
const Student = new mongoose.Schema({
    StudentId:String,
    Name:String,
    Age:Number,

})
module.exports = mongoose.model('Student',Student)