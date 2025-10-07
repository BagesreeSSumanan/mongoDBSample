const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post("/Contact",async(req,res)=>{
    try{
        const newContact = new Contact(req.body);
        await newContact.save()
        .then((savedContact =>{
            console.log(savedContact);
            res.status(201).json({msg:"Conatct saved Successfully"})
        }))
        .catch((error)=>{
            console.log(error);
            res.status(500).json({msg:"Unable to create new contact"})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Unable to create new contact"})
    }
})
module.exports = router;
