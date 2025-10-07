const express = require('express');
const router = express.Router();
const {createContact}= require('../controller/controller');

router.post("/Contact", createContact);
module.exports = router;
