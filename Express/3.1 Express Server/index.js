import express from "express";
const app = new express();

app.get("/",(req,res)=>{
  res.send("My name is Nitigya Chandel.");
});

app.listen(3000,()=>{
  console.log("The server is running on port 3000.");
});