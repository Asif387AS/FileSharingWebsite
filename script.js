
const File=require('./model/file.js')
const fs=require('fs');
const connectDB=require('./config/db.js')

const dotenv=require('dotenv')
dotenv.config({path:"config/config.env"})


async function fetchData(){

    
const pastDate=new Date(Date.now() - 24*60* 60 * 1000)
let files=await File.find({createdAt:{$lt:pastDate}})
// console.log(files);
// console.log(files.length);

if(files.length){
    for(const file of files){
        try {
            fs.unlinkSync(file.path) // only unlink or delted from uploadds folder not from database
            await file.remove(); //delted from database 
            console.log(`file deleted succesfully ${file.filename}`)
            
        } catch (error) {
            console.log(`Error while deleting file ${error}`)
        }

    }
console.log("job done");

}
}

const data=()=>{
    console.log("I am asif ");
    
}
fetchData().then(process.exit);
data()
    connectDB()