const express = require("express")
const ProductService = require("../services/productsService")
const router = express.Router();
const service = new ProductService();


router.get('/filter',(req,res)=>{
  res.send('yo soy un filter')
})

router.get('/:id',async(req,res,next)=>{

  try {
    const {id} = req.params;
    //  const id= req.params.id;

    const produc = await service.findOne(id);
    res.status(200).json({
      produc
    })
    
  } catch (error) {
    next(error)
  }




    // if(id=='999'){

    //   res.status(404).json({
    //       message:"no encontrado"


    //   })
    // }
    // res.status(200).json({
    //     id,
    //     name:"product2",
    //     price:2000


    // })
})

router.get("/",async(req,res)=>{

  const producs = await service.find();
 res.json(producs)
})

router.post("/",async(req,res)=>{
  const body =req.body;

  const newProduct = await service.create(body);
  res.status(201).json({
    message:'created',
    newProduct
  })
})
router.patch("/:id", async (req,res)=>{

  try {
    const{id} = req.params;
    const body =req.body;
     const product = await await service.update(id,body)
     res.json({
       message:'update',
       product
      })

  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
  })
  router.delete("/:id",async (req,res)=>{
    const{id} = req.params;
    const product = service.delete(id)
  res.json({
    message:'delete',
    product
  })
})


module.exports =router;
