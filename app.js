const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {productmodel}=require("./models/products")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sonasabu:sonavi306@cluster0.ejzjjq6.mongodb.net/mernproductdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let product=new productmodel(input)
    product.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    ) 
})

app.post("/search",(req,res)=>{
    let input=req.body
    productmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
        res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    productmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})

app.listen(8088,()=>{
    console.log("server running..")
    })