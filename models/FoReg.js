const mongoose = require('mongoose');

const famer1userSchema = new mongoose.Schema({ 
    // username: {
    //     type: String,
    //     required: 'Please Enter Name'
    // },

    role: {
        type: String, 
        required: 'Please Enter Role '
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
    
    phonenumber: {
        type: String,
        required: 'Please Enter Phone Number'
    },
    
    date: {
        type: Date,
        required: true
    },
   
    resident: [{type: String,}],
    
    ward: [{ type: String, }], 
    
})

module.exports = mongoose.model('FoReg', famer1userSchema);

 