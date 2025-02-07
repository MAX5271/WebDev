function randomNumer() {
    return Math.floor(Math.random() * 4);
}

var sequence=[];
var buttonColors=["green","red","yellow","blue"];
var gamePattern = [];
var lvl=0;


var isRunning = false;
function ani(e){
    $("#"+e).addClass("pressed");
    setTimeout(function(){
        $("#"+e).removeClass("pressed");
    },50);
}
function playSound(color){
    // console.log(e);
    switch (color) {
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

function nextSequence(){
    lvl++;
    $("h1").text(""+lvl);
    var num = randomNumer();
    gamePattern.push(buttonColors[num]);
    playSound(buttonColors[num]);
    ani(buttonColors[num]);
    ans=0;
    sequence=[];
}

function checkAnswer(currentLevel){
    if(sequence[currentLevel]==gamePattern[currentLevel])
        {
            console.log("Right");
            return true;
        }
    else
        {
            console.log("Wrong");
            return false;
        }
}

function startOver(){
    lvl=0;
    gamePattern=[];
    started=false;
}


var started=false;

$(document).keydown(function () {
//     isRunning = true;
        
    
    if(!started){
        nextSequence();
        started=true;
    }
   
    
});

$(".btn").click(function(e){
    playSound(e.target.id);
    ani(e.target.id);
    sequence.push(e.target.id);
    console.log(sequence);
    if(checkAnswer(sequence.length-1)){
        if(sequence.length==lvl){
            setTimeout(nextSequence,1000);
        }
    }else{
        $("h1").text("Game Over. Press any key to try again.");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},300);
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        startOver();
    }
})


