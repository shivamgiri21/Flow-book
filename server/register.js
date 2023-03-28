
var router = require('express').Router();
const bcrypt = require("bcrypt");
const User = require("./models/users");


router.post("/", async(request, response) => {

   const takenEmail=await User.findOne({email:request.body.email})

  if(takenEmail)
  {
    response.json({
    message:"User already exist with same email"})
  }

  else
  {
        // hash the password
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
		  name: request.body.name,
          email: request.body.email,
          password: hashedPassword,
        });
  
        // save the new user
        user.save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
    }
  });



module.exports=router;