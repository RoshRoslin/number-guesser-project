// Game Values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;



// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min & max

minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//listen for guessBtn click
guessBtn.addEventListener('click', function(){
  //value is a string, not a number
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please Enter a Number between ${min} and ${max}`, 'red')
  }

  //check if won
  if(guess === winningNum){
    gameOver(true,`${winningNum} is correct! YOU WIN!`);

  } else {
    guessesLeft-= 1;

    if(guessesLeft === 0){
      //game over
      gameOver(false,`Game Over, The correct number was ${winningNum}`);

    } else {

      //game continues, answer wrong.
      guessInput.style.borderColor = 'red';

      //clear input
      guessInput.value = '';

      setMessage(`${guess} is incorrect. ${guessesLeft} guesses remaining`, 'red');

    }
  }
});

//game over function
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  //disable input
  guessInput.disabled = true;
  //change border color
  guessInput.style.borderColor = color;
  //set winning message
  setMessage(msg, color);

  //play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}
 //set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

//get winning number
function getRandomNum(min, max){
let random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);
return random;

}
