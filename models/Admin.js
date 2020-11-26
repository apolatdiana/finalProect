const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: 'Please Enter Name'
    }, 
    email: {
        type: String,
        required: 'Please Enter Email'
    }, 
    role: {
        type: String,
        required: 'Please Enter Role'
    }, 
    passsword: {
        type: String, 
        required: 'Please Enter Password '
    },
  
})


module.exports = mongoose.model('Admin', adminSchema);

 