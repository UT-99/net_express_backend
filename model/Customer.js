const mongoose = require("mongoose");

const netExpressSchema = mongoose.Schema({
    firstname:{
        type : String,
        required : true,       
    },
    lastname: {
        type : String,
        required : true,       
    },
    email: {
        type : String,
        required : true,       
    },
    password : {
        type : String,
        required : true,       
    },
    confirmPassword: {
        type : String,
        required : true,       
    },


})

const CustomerCollection = mongoose.model( "NetExpressCustomers", netExpressSchema);

module.exports = CustomerCollection;