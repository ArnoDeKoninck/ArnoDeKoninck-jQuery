let optionArray = ["rock", "paper", "scissors"];
let humanScore = 0;
let cpuScore = 0;

$(":button").on("click", function () {
  let elemId = $(this).attr("id");
  console.log(elemId);
  if ($(this).hasClass("marked")) {
    $(this).toggleClass("chosen").toggleClass("marked");
    //locked in
    // game starts
    setTimeout(gameStart(), 1000);
  } else {
    $(":button").removeClass("marked", "chosen");
    $(this).toggleClass("marked");
  }
});
let counter = 0;
function gameStart() {
  let interval = setInterval(function () {
    counter++;
    switch (counter) {
      case 1:
        $("#pLeft, #pRight").text("Rock!");
        break;
      case 2:
        $("#pLeft, #pRight").text("Paper!");
        break;
      case 3:
        $("#pLeft, #pRight").text("Scissors!");
        // after 3 seconds execute code
        break;
      case 4:
        clearInterval(interval);
        setTimeout(gameResult(), 4000);
    }
  }, 1000); // every 1 second
}
function gameResult() {
  let randomNmbr = Math.floor(Math.random() * optionArray.length);
  let cpuChoice = optionArray[randomNmbr];
  let userChoice = $(".chosen").attr("id");
  let result = "It's a Tie!";
  console.log(userChoice);
  console.log(cpuChoice);
  switch (cpuChoice) {
    case "rock":
      $("#imgRight").addClass("rock");
      break;
    case "paper":
      $("#imgRight").addClass("paper");
      break;
    case "scissors":
      $("#imgRight").addClass("scissors");
      break;
  }
  $("#pRight").text(cpuChoice.toUpperCase() + "!");
  switch (userChoice) {
    case "btnRock":
      console.log("get's here");
      $("#imgLeft").addClass("rock");
      $("#pLeft").text("ROCK!");
      if (cpuChoice == "paper") {
        result = "Skynet Wins!";
        cpuScore++;
      } else if (cpuChoice == "scissors") {
        result = "Humans Win!";
        humanScore++;
      }
      break;
    case "btnPaper":
      $("#imgLeft").addClass("paper");
      $("#pLeft").text("PAPER!");
      if (cpuChoice == "scissors") {
        result = "Skynet Wins!";
        cpuScore++;
      } else if (cpuChoice == "rock") {
        result = "Humans Win!";
        humanScore++;
      }

      break;
    case "btnScissors":
      $("#imgLeft").addClass("scissors");
      $("#pLeft").text("SCISSORS!");
      if (cpuChoice == "rock") {
        result = "Skynet Wins!";
        cpuScore++;
      } else if (cpuChoice == "paper") {
        result = "Humans Win!";
        humanScore++;
      }

      break;
  }
  $("#result").text(result);
  $("#score1").text("Human score: " + humanScore);
  $("#score2").text("Skynet score: " + cpuScore);

  setTimeout(function () {
    //resetting screen
    counter = 0;
    $(":button").removeClass("chosen", "marked");
  }, 1000);
}
