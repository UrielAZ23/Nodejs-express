// console.log("My App");


const express = require("express")
const routerApi = require("./routes")
const {faker} = require("@faker-js/faker")
const app = express();
app.use(express.json());
const port = 3000;

app.get("/",(req,res)=>{
 res.send("Hola mi server es express")
 })
app.get("/nueva",(req,res)=>{
 res.send("Hola soy una nueva ruta")
})

routerApi(app)



app.listen(port,()=>{
    console.log("mi port http://localhost:"+port)
});
