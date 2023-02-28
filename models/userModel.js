const mongoose = require('mongoose')
const { tweets } = require('../Controllers/UserController')
const userSchema = mongoose.Schema({
    name: {type: String,required:true},
    email:{type: String,required:true,unique:true},
    password:{type: String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    mobileNumber:{type:Number,required:true},
})
module.exports = new mongoose.model('user',userSchema)