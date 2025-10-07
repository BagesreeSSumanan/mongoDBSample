const Contact = require('../models/Contact');

const createContact = async (req, res) => {
    try {
    if (!req.body) {
      return res.sendStatus(400);
    }
 
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
 
    console.log(savedContact);
    return res.status(201).json({ msg: "Contact saved successfully", data: savedContact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to create new contact", error: error.message });
  }
};

module.exports = {createContact}