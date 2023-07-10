const express = require('express');
const mongoose = require('mongoose');
const Student = require('../models/studentmodel')

const router = express.Router();


router.post('/',async(req , res)=>{
    // const {name , email , age} = req.body;

    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }catch(error){
        console.log(error);
        res.sendStatus(400).json({error:error.messagge});
    }
})


router.get('/' , async(req , res)=>{
    try{
        const allstudents = await Student.find();
        res.status(200).json(allstudents);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500).json({
            error:error.message,
        })
    }
})


router.get('/:id' , async(req , res)=>{
    try{
    const id = req.params.id;
    const student  = await Student.findById({_id:id});
    res.status(200).json(student);


    }catch(error){
        console.log(error);
        res.sendStatus(500).json({
            error:error.message,
        })
    }


})


router.get('/class/:std' , async(req , res)=>{
    try{
    const std = req.params.std;
    const student  = await Student.find({"standard":std});
    res.status(200).json(student);


    }catch(error){
        console.log(error);
        res.sendStatus(500).json({
            error:error.message,
        })
    }


})

router.delete('/:id' , async(req , res)=>{
    try{
    const id = req.params.id;
    const student  = await Student.findByIdAndDelete({_id:id});
    res.status(200).json(student);


    }catch(error){
        console.log(error);
        res.sendStatus(500).json({
            error:error.message,
        })
    }


})

router.patch('/:id' , async(req , res)=>{
    

    try{
        const id = req.params.id;
        console.log(req.body)
        const updateduser  = await Student.findByIdAndUpdate(id , req.body , {new:true});
        res.status(200).json(updateduser);
    }catch(error){
        console.log(error);
        res.sendStatus(500).json({
            error:error.message,
        })
    }


})


router.patch('/amount/:id' , async(req , res)=>{
    

    try{
        // const id = req.params.id;

        console.log(req.body)
        const student = await Student.findOne({"rollno":req.body.rollno})
        req.body.feespaid = req.body.feespaid/1+student.feespaid/1;
        const updateduser  = await Student.findOneAndUpdate({"rollno":req.body.rollno} , req.body , {new:true});
        res.status(200).json(updateduser);
    }catch(error){
        console.log(error);
        res.sendStatus(500).json({
            error:error.message,
        })
    }


})




module.exports = router;