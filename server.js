const express=require("express");
const app=express("");
const cors=require("cors")
const mongoose=require("mongoose")
const port=process.env.Port|| 4000
const Data=require("./Models/index")
mongoose
  .connect(
    "mongodb+srv://devesh089:devesh089@cluster0-fchjz.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(res => {
    console.log("database connected");
  });
app.use(express.json());
app.use(cors())
app.post("/",async(req,res)=>{
const {title,description}=req.body.data;
try{
    let data=new Data({
        title,
        description
    })
   await data.save();
}catch(e){
    console.log(e)
}
})
app.get("/",async(req,res)=>{
    const data=await Data.find({})
    res.json(data)
})


app.listen(port,()=>{
    console.log("listening")
})