const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    fullName :{
        type:String,
        required:[true,'Full name is required'],
        minLength :3,
        maxLength:20,
        trim :true,
        validate: {
            validator: function (value) {
                const nameRegex = /^[a-zA-Z0-9]+$/; 
                return nameRegex.test(value);
            },
            message: 'Only alphanumeric characters are allowed.'
        }
    },
    emailAddress:{
        type: String,
        required:[true,'Email address is required'],
        unique :true,
        validate: {
        validator: function (value) {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return emailRegex.test(value);
            },
            message: 'Please enter a valid email address.'
        }

    },
    age:{
         type: Number,
        required:false,
    }
})
module.exports = mongoose.model("Contact", contactSchema);