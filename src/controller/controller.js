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

const UpdateContact = async (req, res) => {
    try {
    const { id } = req.params; 
    if (!id|| !req.body) {
      return res.sendStatus(400);
    }
 
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      req.body,
      { new: true } 
    );

    if (!updatedContact) {
      return res.status(404).json({ msg: "Contact not found" });
    };
 
    console.log(updatedContact);
    return res.status(201).json({ msg: "Contact updated successfully", data: updatedContact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to update the contact", error: error.message });
  }
};
const GetContact = async (req, res) => {
    try {
    const { id } = req.params; 
    if (!id) {
      return res.sendStatus(400);
    }
 
    const CurrentContact = await Contact.findById(
      id,
     'fullName emailAddress age'
    );

    if (!CurrentContact) {
      return res.status(404).json({ msg: "Contact not found" });
    };
 
    console.log(CurrentContact);
    return res.status(201).json({ msg: "Contact details", data: CurrentContact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to get the contact", error: error.message });
  }
};
const GetAllContact = async (req, res) => {
    try {
 
     const Contacts = await Contact.find({}, 'fullName emailAddress age');

    if (!Contacts) {
      return res.status(404).json({ msg: "Contact not found" });
    };
 
    console.log(Contacts);
    return res.status(201).json({ msg: "Contact details", data: Contacts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to get the contact", error: error.message });
  }
};
const DeleteContact = async (req, res) => {
    try {
    const { id } = req.params; 
    if (!id) {
      return res.sendStatus(400);
    }
 
    const result = await Contact.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    else{
        return res.status(201).json({ msg: "Deleted succesfully" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to delete the contact", error: error.message });
  }
};
module.exports = {createContact,UpdateContact,GetContact, GetAllContact,DeleteContact}