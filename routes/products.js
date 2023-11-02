const express = require("express")
const {faker} = require("@faker-js/faker")
const router = express.Router();



router.get('/filter',(req,res)=>{
  res.send('yo soy un filter')
})

router.get('/:id',(req,res)=>{

    const {id} = req.params;
    //  const id= req.params.id;
    res.json({
        id,
        name:"product2",
        price:2000


    })
})

router.get("/",(req,res)=>{
  const producs = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    producs.push({

      name:faker.commerce.productName(),
      price: parseInt (faker.commerce.price(),10),
      image:faker.image.imageUrl()
    })
  }
 res.json(producs)
})

router.post("/",(req,res)=>{
  const body =req.body;
  res.json({
    message:'created',
    data:body
  })
})


module.exports =router;
