const express = require("express");
const router = express.Router();
const Customers = require("../model/Customer");

router.get("/", (req, resp) => {
  resp.send("This is home page of net express project.");
  resp.end();
});

router.get("/contact", (req, resp) => {
  resp.send("This is contact page of net express project.");
  resp.end();
});

router.post("/register", async (req, resp) => {
    debugger;
  const { firstname, lastname, email, password, confirmPassword } = req.body;
  
  try {
      
      
      const findEmail = await Customers.findOne({ email: email });
      console.log(findEmail)
    if (findEmail != undefined) {
      if (email == findEmail.email) {
        console.log("user already exists, use different email. ");
        resp.send("user already exists, use different email. ");
      }
      
    } 
    else {
        console.log("Data sended by form : ");
        console.log(req.body);
        const customer = new Customers({
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
        });
        const result = await customer.save();
        console.log("in else .");
        resp.status(200).send(result);
        resp.end();
      }
   
  } catch (err) {
    resp.status(400).send(err);
  }
});

module.exports = router;
