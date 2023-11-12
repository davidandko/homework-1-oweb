const array = ["Carpet", "Rooftop", "House", "Paper", "Mouse", "Laptop", "Verified", "Handle", "Door", "Light", "Ground", "Elephant", "Chair", "Minecraft", "Wood", "Fridge", "Dispenser", "Sheets", "Balcony", "Company", "Exercise", "Organization", "Item"];
const arrLength = array.length;
var maxTries = 5;
const maxLettersShowing = 4;
const startPageText = "Guessing game";
var count = 0;

var randomWord = chooseWord();
var randomWordLength = randomWord.length;
var randoms = throwRandomArray();

console.log(array.length);


function throwRandom() { // throws indexes for the random letters that will be showing
    var random = Math.floor(Math.random() * maxLettersShowing);
    return random;
}

function throwRandomArray() { // throws an array of random indexes for the random letters that will be showing
    var randoms = [throwRandom(), throwRandom(), throwRandom()];
    return randoms;
}

function chooseWord() { // chooses a random word from the array
    var chosen = array[Math.floor(Math.random() * arrLength)];
    return chosen;
}

function guess()
{
    ++count;
    var flag;
    var guessedLetters = new Array();
    for(var i = 0; i < randomWordLength; ++i){
        if(i == randoms[0] || i == randoms[1] || i==randoms[2]){
            continue;
        }else{
            guessedLetters[i] = document.getElementById("letter"+i).value;
            if(guessedLetters[i] == randomWord.charAt(i)){
                flag = true;
            }else{
                flag = false;
                break;
            }
        }
    }

    if(flag == true){
        if(count == 1){
            alert("Correct, after " + 1+ " try." );
        }else{
            alert("Correct, after " + count + " tries." );
        }
    }else if(flag==false && maxTries != 1){
        --maxTries;
        alert(maxTries + " tries left.");
    }else if(maxTries == 1){
        alert("Game Over");
        var btn = document.getElementById("try");
        btn.style.setProperty("display","none");
        var startButton = document.createElement("button");
        startButton.textContent = "Start Again";
        var startAgain = document.getElementById("startAgain");
        startAgain.appendChild(startButton);
        startButton.addEventListener("click",reload,false);
        console.log("Time's up!");
    }
}
function reload(){
    window.location.reload();
}

function startTime(){
    let seconds = 30;
    const timer = setInterval(function() {
    seconds--;
    document.getElementById("time").innerHTML="Time remaining: "+seconds;
    if (seconds === 0) {
        clearInterval(timer);
        alert("Game over, timer has passed");
        var btn = document.getElementById("try");
        btn.style.setProperty("display","none");
        var startButton = document.createElement("button");
        startButton.textContent = "Start Again";
        var startAgain = document.getElementById("startAgain");
        startAgain.appendChild(startButton);
        startButton.addEventListener("click",reload,false);
        console.log("Time's up!");
    }
    }, 1000);
}


function play() {
 
    var word = document.getElementById("word");
    var tryDiv = document.getElementById("tryDiv");
    
    var counter = 0;
    
    
        while (counter!=randomWordLength) {
            
            var createInput = document.createElement("input");
            createInput.setAttribute("type", "text");
            createInput.setAttribute("class", "letter");
            createInput.setAttribute("id", "letter" + counter);
            createInput.setAttribute("maxlength","1");
            word.appendChild(createInput);
            counter++;
        }
    
    var createButton = document.createElement("button");
    createButton.setAttribute("id","try");
    createButton.setAttribute("value","Try");
    tryDiv.appendChild(createButton);
    document.getElementById("try").textContent="Try";
    document.getElementById("startGameButton").style.setProperty("display","none");
    
    while (randoms[0] == randoms[1] || randoms[0] == randoms[2] || randoms[1] == randoms[2]) {
        randoms = throwRandomArray(); // Fixed missing parentheses
    }
    var first = randomWord.charAt(randoms[0]);
    var second = randomWord.charAt(randoms[1]);
    var third = randomWord.charAt(randoms[2]);

    document.getElementById("letter" + randoms[0]).value = first;
    document.getElementById("letter" + randoms[1]).value = second;
    document.getElementById("letter" + randoms[2]).value = third;
    tryDiv.addEventListener("click",guess,false);
}
function start(){
    var startGameButton= document.getElementById("startGameButton");
    
    startGameButton.addEventListener("click",play,false);
    startGameButton.addEventListener("click",startTime,false);
    
       
}

window.addEventListener("load", start, false);
