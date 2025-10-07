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
                const nameRegex = /^[a-zA-Z0-9]+$/; // ✅ allows only letters and digits
                return nameRegex.test(value);
            },
            message: 'Only alphanumeric characters are allowed.'
        }
    },
    emailAddress:{
        type: String,
        required:[true,'Email address is required'],
        unique :true

    },
    age:{
         type: Number,
        required:false,
    }
})
module.exports = mongoose.model("Contact", contactSchema);