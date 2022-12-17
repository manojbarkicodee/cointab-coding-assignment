let {usermodel}=require("../models/usermodel")


let validator=async(req,res,next)=>{
let data=await usermodel.find()

if(data.length>0){
    next()
}else{
   return res.status(400).send({success:false,msg:"fetch details"})
}
}

module.exports={validator}