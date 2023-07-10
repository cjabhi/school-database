const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoute = require('./Routes/studentRoute')
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config();

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());
mongoose.connect(process.env.URI).then(()=>{
    console.log("connected to mongodb successfully");
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log('server is running at port ' , process.env.PORT);
    })
}).catch((err)=>{
    console.log("not connected to mngodb " , err);
})


app.use(studentRoute);