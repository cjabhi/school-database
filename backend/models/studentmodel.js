const mongoose = require('mongoose');


const studentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    standard:{
        type:Number,
        required:true,
    },
    rollno:{
        type:Number,
        required:true, 
        unique:true,
    },
    fathersname:String,
    mothersname:String,
    address:String,
    contactno:Number,
    feespaid:Number,
},{
    
        timestamps:true
})

const Student = mongoose.model('Student' , studentschema)
module.exports = Student;