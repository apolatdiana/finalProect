const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({ 
    // username: {
    //     type: String,
    //     required: 'Please Enter Name'
    // },

    role: {
        type: String, 
        required: 'Please Enter Role '
    },

    phonenumber: {
        type: String,
        required: 'Please Enter Phone Number'
    },

    nin: {
        type: String,
        required: 'Please Enter Phone Number'
    },

    occupation: {
        type: String,
        required: 'Please Enter Phone Number'
    },

    genger: [{ type: String, }],
    
    birthDate: {
        type: Date,
        required: true
    },

    date: {
        type: Date,
        required: true
    },
   
    resident: [{type: String,}],
    
    ward: [{ type: String, }], 
    
})


module.exports = mongoose.model('Ufarmer', farmerSchema);

 