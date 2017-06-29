/* Javascript for Psychic Game */



function getRandom() {
    console.log("function getRandom");
    //randomLetter = "";
    var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // create an array
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    //console.log("Function getLetter: The random letter is: " + randomLetter); // for testing.
    ranLetter = randomLetter;
  }

function getKeyChars(randomLetter) {
	var flag = false; // futile  attempt to stop the program from running continuously before any data is input.
  document.getElementById("guessId").addEventListener("keyup", flag=true);
  if (flag = true) {
    //console.log("Function getLetter: The random letter is: " + ranLetter);
  	var rawInput = document.getElementById("guessId").value;
  	document.getElementById("yourGuessesId").innerHTML = rawInput; //updates Your Guesses So Far field
  	guessedLetters = rawInput;
	  document.getElementById("guessesLeftId").innerHTML = (maxGuess - guessedLetters.length); //decrements "Guesses Left" field
    compareChars(randomLetter, rawInput);		
	}
  flag = false; // reset futility flag.
}


function compareChars(randomLetter, rawInput) {
    console.log("Function compare: The random letter is: " + ranLetter);
    console.log("Function compare: The guessedLetters are: " + guessedLetters);
  	
          //ranLetter = "j"; //for testing
          if (ranLetter === guessedLetters[guessedLetters.length-1]) {  // compare random letter to last letter added to array
      	    document.getElementById("status").innerHTML = "That is Correct!";
      	    wins = wins + 1; // increment wins and update screen stats
            document.getElementById("winsId").innerHTML = wins;
           // newRound();
          
          } else {  // if incorrect guess
              console.log("ranLetter has value " + ranLetter);
              document.getElementById("status").innerHTML = "Sorry. Incorrect Guess"; 
              var numLeft = document.getElementById("guessesLeftId").innerHTML; 
              console.log("function compareChars. Guesses left is: " + numLeft);
              if (numLeft < 1) {    //if no guesses are left
                losses = losses + 1;   // increment losses and update screen stats
                document.getElementById("lossesId").innerHTML = losses;
                document.getElementById("status").innerHTML = "The random letter was " + ranLetter; 
               // newRound(); 
              }
          } 
        }

function checkForWinner(wins, losses) {
  if (wins === maxWins) {
    document.getElementById("winloseId").html = "YOU WON THE GAME!!!";
  } 
  if (losses === maxLosses) {
    document.getElementById("winloseId").html = "YOU LOST";
  } 
} 


function newRound() {
  console.log("this is the newRound function");
  //randomLetter = "";
  //ranLetter = ""; //stores the random letter generated.
  //rawInput = "";
  guessedLetters = []; //the string formed by guessed letters.
  document.getElementById("yourGuessesId").innerHTML = "none";
  guessesLeft = document.getElementById("guessesLeftId").innerHTML = 9;
  document.getElementById("status").innerHTML = "Select a letter.";
  console.log("end of function newRound");
}

/*function initGame() {
  randomLetter = "";
  wins = document.getElementById("winsId").innerHTML = 0;
  losses = document.getElementById("lossesId").innerHTML = 0;
  guessesLeft = document.getElementById("guessesLeftId").innerHTML = 9;
  guessesSoFar = document.getElementById("yourGuessesId").innerHTML = "";
  ranLetter = ""; //stores the random letter generated.
  guessedLetters = []; //the string formed by guessed letters.
  document.getElementById("status").innerHTML = "Select a letter.";
} */

 
