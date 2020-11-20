const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: 'Please Enter Name'
    },
    email: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "farmer1","Ufarmer"],
        default: "ufarmer"
    },
    password: {
        type: String
    },

})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('UserCredential', userSchema);