const express = require('express');
const router = express.Router();
const {createContact,UpdateContact,GetContact,GetAllContact,DeleteContact}= require('../controller/controller');

router.post("/Contact", createContact);
router.put("/UpdateContact/:id", UpdateContact);
router.get("/GetContact/:id", GetContact);
router.get("/GetAllContact", GetAllContact);
router.delete("/DeleteContact/:id", DeleteContact);
module.exports = router;
