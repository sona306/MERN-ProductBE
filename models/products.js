const mongoose=require("mongoose")
const schema=mongoose.Schema
(
    {
        "pid":String,
        "pname":String,
        "category":String,
        "price":String
    }
)

let productmodel=mongoose.model("products",schema);
module.exports={productmodel}