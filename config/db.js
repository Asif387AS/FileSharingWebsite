const mongoose=require('mongoose');
// const dotenv=require('dotenv')
// dotenv.config({path:"fileSharingApp/config.env"})
const connectDB=()=>{
    
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true}).then((data)=>{
    console.log(`Mongodb connected with server ${data.connection.host}`)
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB;