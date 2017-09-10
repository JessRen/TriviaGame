
/************ GLOBAL VARIABLES *************
********************************************/

// Arrays and variables for holding data values

var wordOptions = ["apple", "pear", "orange"];
word selectedWord = --;
var lettersInWord = [];
var numberBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];


// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


/************* FUNCTIONS *******************
*******************************************
reusable code blocks to call upon as needed*/


//START OF STARTGAME FUNCTION
function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() + wordOptions.length)];
  lettersInWord = selectedWord.split("");
  numberBlanks = lettersInWord.length;
}

//Reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = []; // EX: a _ _ _ _ ;



//Populate blanks and successes with right # of blanks.
for (var i = 0; i < numberBlanks; i++) {
  blanksAndSuccesses.push("_");
}

document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numberGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCount").innerHTML = lossCount;
//END OF STARTGAME FUNCTION




//Debugging


/************* MAIN PROCESS *****************
********************************************/