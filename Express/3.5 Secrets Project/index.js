//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import exp from "constants";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var s=false;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

function check(req,res,next){
    if(req.body["password"]=="Nitigya Chandel"){
       s=true;
    }else{
        s=false;
    }
    console.log(s);
    next();
}

app.use(check);

app.post("/check",(req,res)=>{
    if(s)
    res.sendFile(__dirname+"/public/secret.html");
    else res.sendFile(__dirname+"/public/index.html");
});

app.listen(port,()=>{});