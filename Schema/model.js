let mongoose=require('mongoose')
let schema=mongoose.Schema

let UserInputs=new schema({
    firstName: String,
    lastName: String,
    username:String,
    email:String,
    password:String,
    phone:String
      
})



module.exports=mongoose.model('customers',UserInputs)
