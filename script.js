let userguess = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("sic");
let container = document.getElementById("container");
let resultElement = document.getElementById("result");

rock.addEventListener("mousedown", function () {
  rock.style.width = "160px";
  rock.style.height = "160px";
  userguess = 1;
  setTimeout(() => {
    rock.style.width = "137px"; // or your original size
    rock.style.height = "117px";
  }, 2000);
});

paper.addEventListener("mousedown", function () {
  paper.style.width = "160px";
  paper.style.height = "160px";

  userguess = 1;

  setTimeout(() => {
    paper.style.width = "137px"; // or your original size
    paper.style.height = "117px";
  }, 2000);
});

scissor.addEventListener("mousedown", function () {
  scissor.style.width = "160px";
  scissor.style.height = "160px";
  userguess = 1;
  setTimeout(() => {
    scissor.style.width = "137px"; // or your original size
    scissor.style.height = "117px";
  }, 2000);
});

function main() {
  // console.log(userguess);     //this display userguessed number

  console.log('working on calculation')

  const computerGuess = Math.floor(Math.random() * 3) + 1;
 let resultbutton = document.getElementById("result")

  resultbutton.style.height = "4rem";

  setTimeout(() => {
    resultbutton.style.height = "2rem";
  }, 2000);

  let reset = result;

  computerGuessInstring = "";

  if (computerGuess == 1) {
    computerGuessInstring = "rock";
  }
  if (computerGuess == 2) {
    computerGuessInstring = "paper";
  }
  if (computerGuess == 3) {
    computerGuessInstring = "scissor";
  }

  if (userguess == computerGuess) {
    result = "draw";
  }
  if (userguess == 1 && computerGuess == 2) {
    result = "Computer wins";
  }
  if (userguess == 2 && computerGuess == 1) {
    result = " You wins";
  }
  if (userguess == 2 && computerGuess == 3) {
    result = "Computer wins";
  }
  if (userguess == 3 && computerGuess == 2) {
    result = " You wins";
  }
  if (userguess == 1 && computerGuess == 3) {
    result = " You wins";
  }
  if (userguess == 3 && computerGuess == 1) {
    result = "Computer wins";
  }

  document.getElementById("result").innerHTML =
    "ComputerGuess:" +
    computerGuessInstring +
    "<br>" +
    "Congratulation ," +
    " " +
    result;
};

// here now what i have to do is that show timer for 2 second and after that automatically reset the result

let timeLeft = 2;
let timerElement = document.getElementById("timer");

document.getElementById("container").addEventListener("click", function () {
  console.log('working on click')
 
  main()
  console.log('working on timer')
  
  if (window.countdownRunning) return;
  window.countdownRunning = true;

  const countdown = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = "Timer: " + timeLeft;

    if (timeLeft < 0) {
      clearInterval(countdown); // Stop the timer
      window.countdownRunning = false; // allow restart
      timeLeft = 2; // optional: reset to 10 if clicked again
    timerElement.innerHTML = "Timer: " + timeLeft;    //this line again reset the timer to 2 after each click

    }
  }, 1000);

  setTimeout(() => {
    const resultButton = document.getElementById("result");
    resultButton.innerHTML = "Click again to play";
    // resultButton.style.height = "2rem";

    // document.getElementById("result").innerHTML = "" + "Click again to start"; // Clear result text
  }, 2000);
});

// // this one for manually reseting means after clicking this code will reset to result
// document.getElementById("reset").addEventListener("click", function () {
//   document.getElementById("result").innerHTML = "" + "Click again to start";
// });
