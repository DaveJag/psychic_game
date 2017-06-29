/* Javascript for Psychic Game */

function getRandom() {
    console.log("function getRandom");
    randomLetter = "";
    var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // create an array
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    //console.log("Function getLetter: The random letter is: " + randomLetter); // for testing.
    ranLetter = randomLetter;
  }

function getKeyChars(randomLetter) {
	//console.log("Function getLetter: The random letter is: " + ranLetter);
	var rawInput = document.getElementById("guessId").value;
	document.getElementById("yourGuessesId").innerHTML = rawInput; //updates Your Guesses So Far field
	guessedLetters = rawInput;
	document.getElementById("guessesLeftId").innerHTML = (maxGuess - guessedLetters.length); //decrements "Guesses Left" field
    compareChars(randomLetter, rawInput);		
	}
	//console.log("The guessedLetters are: " + guessedLetters);
	//console.log("guessedLetters.length is: " + guessedLetters.length);
	//if (guessedLetters.length === maxGuess) { //move to next function after collecting data
	//	compareChars();
	

function compareChars(randomLetter, rawInput) {
    console.log("Function compare: The random letter is: " + ranLetter);
    //console.log("Function compare: The guessedLetters are: " + guessedLetters);
  	for (var i = 0; i < maxGuess; i++) {
          if (ranLetter === guessedLetters[i]) {
      	    document.getElementById("status").innerHTML = "That is Correct!";
      	    wins = wins + 1;
          } else {
      	      document.getElementById("status").innerHTML = "Sorry. Incorrect Guess"; 
          } 
        }
    }
/*	for(var i=0; i<maxGuess; i++ {

	})
	console.log(rawInput[0]); 
    console.log(rawInput[1]); 
	console.log(rawInput[2]); 
	console.log(rawInput[3]); 
	console.log(rawInput[4]); 
	console.log(rawInput[5]); 

 } */

 
