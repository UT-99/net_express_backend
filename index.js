const express = require("express");
require("./db/connection")
const customerRouter = require("./controlllers/Customers")
const app = express();
const cors = require("cors")

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded())
app.use(customerRouter)


app.listen(8000, ()=> {
    console.log("server started on port 8000")
})