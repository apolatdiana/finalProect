const mongoose = require('mongoose');

const famer1userSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: 'Please Enter Name'
    },

    email: {
        type: String,
        required: 'Please Enter Name'
    },

    phonenumber: {
        type: String,
        required: 'Please Enter Phone Number'
    },

    role: {
        type: String,
        required: true,
       
    },
    gender: [{ type: String }],

    nin: {
        type: String,
        required: 'Please Enter NIN',
        unique: true
    },

    occupation: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    },
   
    resident: [{type: String,}],
    
    ward: [{ type: String, }], 
    
})

module.exports = mongoose.model('FoReg', famer1userSchema);

 