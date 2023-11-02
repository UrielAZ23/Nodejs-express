const express = require("express")
const fs = require("@faker-js/faker")
const router = express.Router();


router.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params;
  res.json({
      categoryId,
      productId,


  })


})

module.exports = router;
