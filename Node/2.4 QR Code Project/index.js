/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import { readFile, writeFile,createWriteStream } from "fs";
import { type } from "os";

inquirer.prompt([
    {
        type: "input",
        name: "link",
        message: "Enter the link you want to convert into qr-image",
    }
]).then((answers)=>{
    // console.log(answers);
    // answer=answers;
    writeFile("url.txt",answers.link,(err)=>{
        if(err) throw err;
    });
    var qr_svg = qr.image(answers.link);
    qr_svg.pipe(createWriteStream('qr-image.png'));
}
);