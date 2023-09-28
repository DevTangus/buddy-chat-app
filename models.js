const { default:mongoose } = require("mongoose");

//Pass schema into the new mongoose models 
const User = mongoose.model("user", {
name:{
type:String,
required:true
},
email:{
type:String,
required:true,
index:{unique:true}
}
});

const Message = mongoose.model("Message", {
    message:String,
    senderMail:String,
    recieverMail: String,
    timestamp:number 
});