const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
mongoose.connect('mongodb://localhost:27017')
const UserSchema = mongoose.Schema({
  username :  String,
  password : String,
  secret : String})
UserSchema.plugin(plm);
module.exports = mongoose.model("User",UserSchema)