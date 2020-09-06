const randomNumber = Math.ceil(Math.random() * 9) + 1;

let userInput: any;


do {
  userInput = window.prompt("Guess ahmed a number between 1 and 9!");
} while (randomNumber !== userInput)

console.log("Correct! the number is " + randomNumber);

