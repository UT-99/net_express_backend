const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/net_express_App_DB").then( ()=> {console.log(" Database connected")}).catch( err => {console.log("Connection failed");
console.log(err)})


