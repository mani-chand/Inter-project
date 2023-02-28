const express = require('express')
exports.sendTweets = async(req,res)=>{
const {createUser,validUser,sendTweets,deleteTweet,getAllTweetsByUser,sample} = require('./../Controllers/UserController.js')
const router = express.Router();
router.post('/newUser',createUser)
router.post('/validUser',validUser)
router.get('/',sample)
router.post('/sendTweets/:id',sendTweets)
router.delete('/deleteTweet/:id',deleteTweet)
router.get('/getAllTweetsByUser/:id',getAllTweetsByUser)
module.exports = router