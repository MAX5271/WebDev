const fs = require("fs");
// fs.writeFile("messages.txt","Hello from Node.js", (err)=>{
//     if(err) throw err;
//     console.log("The file has been saved.");
// });

fs.readFile("./messages.txt","utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 