const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({ 
    productname: {
        type: String,
        required: 'Please Enter Product Name'
    },

    unitprice: {
        type: String,
        required: 'Please Enter Price per Kg'
    },

    quantity: {
        type: String,
        required: 'Please Enter total Kgs of product'
    },

    date: {
        type: String,
        required: 'Please Enter Upload date'
    },

    direction: {
        type: String,
        required: 'Please Enter Home direction'
    },

    productType:[{type: String,}],

    ward: [{ type: String, }],
    
    payment: [{type: String,}],

    delivery: [{type: String,}],
   
    
    photo: {
        data: Buffer, 
        type: String
    }, 
    
})

module.exports = mongoose.model('UploadProduct', farmerSchema);