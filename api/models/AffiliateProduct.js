const mongoose = require('mongoose');

const affiliateProductSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    link:{
        type:String,
        required: true
    }
},{versionKey:false});

const affiliateProduct = mongoose.model('affiliateProducts', affiliateProductSchema);
module.exports = affiliateProduct;