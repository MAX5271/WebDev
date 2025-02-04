var d1=Math.floor(Math.random()*6)+1;
var d2=Math.floor(Math.random()*6)+1;

if(d1>d2)
document.querySelector("h1").innerHTML="PLAYER 1 WINS 🚩";
else if(d1<d2) document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";
else document.querySelector("h1").innerHTML="DRAW";

document.querySelector(".img1").src="./images/dice"+d1+".png";
document.querySelector(".img2").src="./images/dice"+d2+".png";