var router = require('express').Router();
const Product = require("./models/product");

// ADD
router.post("/", async(request, response) => {

    // const newProduct = new Product({
    //     title: request.body.title,
    //     description: request.body.description,
    //     price:request.body.price,
    //     pincode:request.body.pincode,
    //     imgurl:request.body.imgurl
    //   });
     
    const newProduct = new Product(request.body);

     newProduct.save()
          
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

  // UPDATE

  router.put("/:id",  async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(
        {  message:"Product Updated",
            updatedProduct
        });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id",  async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get("/", async (req, res) => {
    // const qNew = req.query.new;
    // const qCategory = req.query.category;
    // try {
    //   let products;
  
    //   if (qNew) {
    //     products = await Product.find().sort({ createdAt: -1 }).limit(1);
    //   } else if (qCategory) {
    //     products = await Product.find({
    //       categories: {
    //         $in: [qCategory],
    //       },
    //     });
    //   } else {

        try{

       const products = await Product.find();

        res.status(201).send({
        message: "Fetched all products",
        products
          });
        // res.status(200).json(products);

        }
       catch (err) {
      res.status(500).json(err);
    }
  });


  router.get("/:id", async (req, res) => {

     try{
     const products=  await Product.findById(req.params.id);

     res.status(201).send({
      message: "Fetched required product",
      products
        });

     }

       catch (err){
      res.status(500).json(err);
      console.log(err);
      }

  });



module.exports=router;