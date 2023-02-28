const mongoose  = require('mongoose')
const tweetSchema = new mongoose.Schema({
    uid:{type:mongoose.Types.ObjectId,required:true},
    message:{type:String},
    file:{type:String}
})
module.exports = new mongoose.model('chat',tweetSchema)