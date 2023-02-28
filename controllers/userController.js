const userModel = require('./../Models/UserModel.js')
const tweetModel = require('./../Models/TweetModel.js')
const bcrypt = require('bcrypt')
exports.createUser=async(req,res)=>{
try {
    const {name,email,password,age,gender,mobileNumber} = req.body
    const user =  await userModel.findOne({email:email})
    if(user){
        res.status(400).send({message:'user already found with this email'})
    }
    const newUser = await userModel({
        name,
        email,
        password,
        age,
        gender,
        mobileNumber
    }).save()
    return res.status(200).json({newUser})
} catch (error) {
}
}
exports.validUser = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email:email})
        if(!user){
            res.status(400).send({message:'user not found'})
        }
        const valid = bcrypt.compare(password,user.password)
        if(valid){
            return res.status(200).json({user})
        }
        else{
            res.status(400).send({message:'invalid password or email'})
        }
    }catch(error){}
}
exports.sendTweets = async(req,res)=>{
    try {
    const id = req.params
    const {message,file} = req.body
    const user = await userModel.findOne({_id:id})
    if(!user){}
    const newTweet = await tweetModel({
        id,
        message,
        file
    }).save()
    return res.status(200).json({newTweet})
    } catch (error) {
        
    }
}
exports.deleteTweet = async(req,res)=>{
   try {
    const id = req.params
    const deletedTweet = await tweetModel().findOneAndDelete({_id:id})
    return res.send(deletedTweet).status(200)
   } catch (error) {
    
   }
}
exports.getAllTweetsByUser =  async(req,res)=>{
   try {
    const id = req.params
    const tweets = await tweetModel().find({uid:id}).exec()
    return res.send(tweets).status(200)
   } catch (error) {
    
   }
}
exports.sample=async(req,res)=>{
    res.send("helloworld")
}