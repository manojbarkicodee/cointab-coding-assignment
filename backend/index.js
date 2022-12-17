let express=require("express")
let {connection}=require("./Config/db")
let fetch=require("node-fetch")
let {usermodel}=require("./models/usermodel")
let {validator}=require("./middlewares/validator.js")
let cors=require("cors")
let app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
res.send("welcome")
})
// fetch details from api to save to database
app.post("/fetchdetails",async(req,res)=>{

    console.log(req.body)
    let {url}=req.body
   

let response=await fetch(url)

let data=await response.json()

try{
await usermodel.insertMany(data.results)
    return res.status(201).send({msg:"fetched the details"})
}catch(err){
return res.status(400).send({msg:"Bad request,try after some time"})
}
})


app.use(validator)

// delete all details from database
app.delete("/deleteall",async(req,res)=>{

    let data=await usermodel.find()
    if(data.length>0){

    }
    try{
await usermodel.remove({})
res.status(202).send({msg:"Deleted all details"})
    }catch(err){
        res.status(204).send({msg:"No content"})
    }
})
// get user details
app.get("/userdetails",async(req,res)=>{
    let {age,gender,limit=10,page=1}=req.query
console.log(age,gender)
    let filterage=age?.trim().split("-").map(Number)||[]
    console.log(filterage)
    let totalcount=await usermodel.countDocuments({})
    let data=await usermodel.find().limit(limit).skip((page-1)*limit)
    // console.log(data)
    if(age&&gender){
        data= await usermodel.find({gender:gender,"dob.age":{$gt:filterage[0],$lt:filterage[1]}}).limit(limit).skip((page-1)*limit)
    }else if(age){
        data=await usermodel.find({"dob.age":{$gt:filterage[0],$lt:filterage[1]}}).limit(limit).skip((page-1)*limit)
    }else if(gender){
        data=await usermodel.find({gender:gender}).limit(limit).skip((page-1)*limit)
    }
    
    console.log(data)
    res.json({results:data,totalcount:totalcount})
    })
app.listen(8080,async()=>{
try{
    console.log("connected")
    await connection
    
}catch(err){
console.log(err)
}
})