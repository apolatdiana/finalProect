const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: 'Please Enter Name'
    }, 
    email: {
        type: String,
        required: 'Please Enter Name'
    }, 
    role: {
        type: String,
        required: 'Please Enter Name'
    }, 
    passsword: {
        type: String, 
        required: 'Please Enter Role '
    },
  
})


module.exports = mongoose.model('Admin', adminSchema);

 