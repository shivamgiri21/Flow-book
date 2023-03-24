var router = require('express').Router();
const User = require("./models/product");


router.post("/", async(request, response) => {

    const user = new User({
        title: request.body.title,
        description: request.body.description,
        price:request.body.price,
        pincode:request.body.pincode,
        imgurl:request.body.imgurl
      });

      user.save()
          
          .then((result) => {
            response.status(201).send({
              message: "Product Added Successfully",
              result,
            });
          })
          
          .catch((error) => {
            response.status(500).send({
              message: "Error ",
              error,
            });
          });

  });



module.exports=router;