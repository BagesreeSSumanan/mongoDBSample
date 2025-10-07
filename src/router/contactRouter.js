const express = require('express');
const router = express.Router();
const {createContact}= require('../controller/controller');

router.post("/Contact",async(req,res)=>{
    try{
        
    if (!req.body) {
        return res.sendStatus(400);
    }
        const newContact=  await createContact(req,res).then(() => res.json({ message: 'New Contact created.' }));

    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
})
module.exports = router;
