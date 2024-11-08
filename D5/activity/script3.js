var secretNumber =  Math.floor(Math.random()*10) + 1;
var attempts = 0;
console.log("Welcome", secretNumber);
let guessedNumber = '';
do {
    guessedNumber = parseInt(prompt('Guess the number from 1 -10:'))
    if(guessedNumber !== secretNumber){
        if(guessedNumber < secretNumber){
            console.log("Too low! Try again.")
        }else{
            console.log("Too high! Try again.")
        }
        
    }
    attempts++;
} while( guessedNumber !== secretNumber);

console.log("Congratulations! You guessed the correct number:"+secretNumber);
console.log("It took you "+attempts+  " attempt/s");