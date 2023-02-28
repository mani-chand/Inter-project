const express = require('express')
const app =  express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const userRouter = require('./Routers/userRouter.js')
app.use('/',userRouter)
mongoose.connect('mongodb+srv://manichand:root@cluster0.oll6q.mongodb.net/internSumanth?retryWrites=true&w=majority').then(()=>{
    app.listen(5000,()=>{
        console.log('listening on port 5000')
    })
}).catch(()=>{})