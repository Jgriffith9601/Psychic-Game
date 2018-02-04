
// variables for saving the wins, losses and guesses, and also the varialbes for the alphabet so the computer has a list it can pick randomly from.
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = 0;
// computer picks arandom letter from alphabetLetters stores it in the computerguess var
var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerGuess);


document.onkeyup = function(event) {


  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
  
    guessesLeft--;
  }
  if (computerGuess == userGuess) {
    wins++;
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
  }
 if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
  }

  var html = "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
 document.querySelector("#game").innerHTML = html;

}