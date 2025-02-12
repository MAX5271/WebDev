import express from "express";
const app = new express();

const port = 3000;

app.get("/",(req,res)=>{
  res.send("<h1>Hello World.</h1>");
})

app.get("/about",(req,res)=>{
  res.send("<h1>About Me</h1><p>My name is Nitigya Chandel</p>");
});

app.listen(port,()=>{
  console.log(`The server is running on the port ${port}.`);
})