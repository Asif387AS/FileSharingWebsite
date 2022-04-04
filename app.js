const express = require('express')
const dotenv=require('dotenv')
let connectDB=require('./config/db.js')
const routes=require('./routes/files.js')
const app = express()
const path=require('path')
// const port = 3000
dotenv.config({path:"config/config.env"})


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
// template engine path 
app.set("views",path.join(__dirname,"/views/"))
app.set('view engine','ejs')
// api routes 
app.use('/api/files',require('./routes/files.js'))
app.use('/files',require('./routes/show.js'))
app.use('/files/download',require('./routes/download.js'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// connect to database 
connectDB();
app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT}`)
})