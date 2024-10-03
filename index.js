//1
require('dotenv').config()
//2
const express = require('express')
//3
const cors = require('cors')
//10
const router = require('./Routes/router')

//9
require('./DB/connection')


//4
const pfServer = express()
//5
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
//6
const PORT = 3000 || process.env.PORT
//7
pfServer.listen(PORT,(req,res)=>{
    console.log("pfServer started at port" + PORT);
})
//8
pfServer.get('/',(req,res)=>{
    res.status(200).send('<h1>Project Fair Server Started...Waiting for the client request<h1>')
})
