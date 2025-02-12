import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log("Requested URL: "+req.url);
  console.log("Requested Method: "+req.method);
  req.next();
}

// app.use(logger);

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/",(req,res)=>{
  res.send("<h1>Hello World</h1>");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
