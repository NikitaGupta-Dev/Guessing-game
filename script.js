let play = true;
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessBtn = document.getElementById("guessBtn");
let quitBtn = document.getElementById("quitBtn");
let playAgainBtn = document.getElementById("playAgainBtn");
let userGuess = document.getElementById("userGuess");
let message = document.getElementById("message");

guessBtn.addEventListener("click", () => {
  if (!play) return;
  let guess = userGuess.value.trim();

  if (guess.toLowerCase() === "quit") {
    endGame("Thanks for playing! Goodbye!");
    return;
  }

  let guessNumber = parseInt(guess);

  if (isNaN(guessNumber)) {
    message.innerHTML = "❌ Please enter a valid number!";
    message.style.color = "red";
    return;
  }

  if (guessNumber === randomNumber) {
    message.innerHTML = `🎉 Congratulations! You guessed it right! It was ${randomNumber}`;
    message.style.color = "lightgreen";
    play = false;
    playAgainBtn.classList.remove("hidden");
  } else if (guessNumber < randomNumber) {
    message.innerHTML = "📉 Too low! Try again.";
    message.style.color = "#ff6600";
  } else {
    message.innerHTML = "📈 Too high! Try again.";
    message.style.color = "#ff6600";
  }

  userGuess.value = "";
});

quitBtn.addEventListener("click", () => {
  endGame("Thanks for playing! Goodbye!");
});

playAgainBtn.addEventListener("click", () => {
  play = true;
  randomNumber = Math.floor(Math.random() * 10) + 1;
  message.innerHTML = "";
  userGuess.value = "";
  playAgainBtn.classList.add("hidden");
});

function endGame(msg) {
  play = false;
  message.innerHTML = msg;
  message.style.color = "red";
  guessBtn.disabled = true;
  quitBtn.disabled = true;
  userGuess.disabled = true;
}
