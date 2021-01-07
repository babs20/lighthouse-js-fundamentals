let prompt = require("prompt-sync")({
  history: require('prompt-sync-history')() //open history file
});;

let attempts = []; // Init attempts array to track number of attempts
const randomNum = Math.ceil(Math.random() * 20); // Init random number
let gameStatus = true; //Set game status to true. False stops the prompt and ends the program

while (gameStatus === true) {
  let answer = prompt("Guess a number between 1-20: ");
  answer = Number(answer) // convert answer to a number
  if (!isNaN(answer)) { // check to make sure it is a real number
    // Push answer to attempts array if unique
    if (!attempts.includes(answer)) {
      attempts.push(answer);
    }
    // Check if the answer is correct, too high or too low
    if (answer === randomNum) {
      console.log(`Congrats! That is the correct number. It took you ${attempts.length} attempts!`);
      gameStatus = false;
    } else if (answer > randomNum) {
      console.log(`Too High!`);
    } else if (answer < randomNum) {
      console.log(`Too Low!`);
    }
  } else {
    console.log(`Not a number! Try again!`);
  }
}