const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://Abhay245:Abhay%40220104@cluster0.xofdufw.mongodb.net/?retryWrites=true&w=majority'
const mongoConnect=()=>{
mongoose.connect(
    mongoURI
  ).catch((e) => {
    console.log("error connecting to mongoose!");
  });
  mongoose.connection.on("error", (e) => {
    console.log("mongo connect error!");
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
}
  module.exports=mongoConnect;