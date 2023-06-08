const express=require('express')
const app = express()
const port = 5000
const mongoConnect=require('./db')
mongoConnect()
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`Food Delivery App listening on port ${port}`)
})