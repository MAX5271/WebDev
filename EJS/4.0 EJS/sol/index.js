import express from "express";

const app = new express();
const port = 3000;

const d = new Date();
let day = d.getDay();

var weekend = "Weekend";

if (day <=5) weekend = "Hey! It's a weekday, it's time to work hard.";
else weekend = "Hey! It's a weekend it's time to have fun.";

// console.log(day);
app.get("/", (req, res) => {
  res.render("index.ejs", {
    day: weekend,
  });
});


app.listen(port,()=>{});