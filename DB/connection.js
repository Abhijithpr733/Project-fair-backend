// 1 Import mongoose
const mongoose = require('mongoose')

//2 
const connection_string = process.env.CONNECTION_STRING

//3
mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB connection established with pfServer");
}).catch((err)=>{
    console.log("MongoDB connection error" + err);
})