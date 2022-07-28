window.onload = function () {
  var sBtn = document.getElementById("_S");
  var scBtn = document.getElementById("_Sc");
  var pBtn = document.getElementById("_P");
  var playagain = document.getElementById("playagain");
  var main = document.getElementById("main");
  var pChoice = document.getElementById("pChoice");
  var cChoice = document.getElementById("cChoice");
  var result = document.getElementById("result");
  var resultContainer = document.getElementById("result-container");
  var pscore = document.getElementById("player-score");
  var cscore = document.getElementById("computer-score");
  var movesCont = document.getElementById("moves");
  var _decision = document.getElementById("decision");
  var moves = 10;
  var playerScore = 0;
  var computerScore = 0;
  movesCont.innerHTML = moves;
  playagain.onclick = function(){
      moves = 10
      playerScore = 0
      computerScore = 0
      _decision.innerHTML = ''
      resultContainer.style.display='none'
      resultContainer.style.marginBottom = '150px'
      result.innerHTML = ''
      pChoice.innerHTML = ''
      cChoice.innerHTML = ''
      if(main.classList.contains('win')||main.classList.contains('lose')||main.classList.contains('draw')){
          main.classList.remove('win')
          main.classList.remove('lose')
          main.classList.remove('draw')
      }
  }
  sBtn.onclick = function () {
    player = "Stone";
    pChoice.innerHTML = player;
    computer = computerChoice();
    cChoice.innerHTML = computer;
    _decision.innerHTML = decision(player, computer);
    --moves;
    movesCount(moves);
    pscore.innerHTML = playerScore;
    cscore.innerHTML = computerScore;
  };
  pBtn.onclick = function () {
    player = "Paper";
    pChoice.innerHTML = player;
    computer = computerChoice();
    cChoice.innerHTML = computer;
    _decision.innerHTML = decision(player, computer);
    --moves;
    movesCount(moves);
    pscore.innerHTML = playerScore;
    cscore.innerHTML = computerScore;
  };
  scBtn.onclick = function () {
    player = "Scissor";
    pChoice.innerHTML = player;
    computer = computerChoice();
    cChoice.innerHTML = computer;
    _decision.innerHTML = decision(player, computer);
    --moves;
    movesCount(moves);
    pscore.innerHTML = playerScore;
    cscore.innerHTML = computerScore;
  };
  function movesCount(moves) {
    movesCont.innerHTML = moves;
    if (moves > 0) {
      return false;
    } else {
      resultContainer.style.display = "flex";
      resultContainer.style.marginBottom = '0px'
      if (playerScore == computerScore) {
        result.innerHTML = "Thats a Draw!!!";
        if (resultContainer.classList.contains("win")) {
          resultContainer.classList.remove("win");
        }
        if (resultContainer.classList.contains("lose")) {
          resultContainer.classList.remove("lose");
        }
        if (!resultContainer.classList.contains("draw")) {
          resultContainer.classList.add("draw");
        }
      } else if (playerScore > computerScore) {
        if (!resultContainer.classList.contains("win")) {
          resultContainer.classList.add("win");
        }
        if (resultContainer.classList.contains("lose")) {
          resultContainer.classList.remove("lose");
        }
        if (resultContainer.classList.contains("draw")) {
          resultContainer.classList.remove("draw");
        }
        result.innerHTML = "Congratulation You Win!!!";
      } else {
        if (!resultContainer.classList.contains("lose")) {
          resultContainer.classList.add("lose");
        }
        if (resultContainer.classList.contains("win")) {
          resultContainer.classList.remove("win");
        }
        if (resultContainer.classList.contains("draw")) {
          resultContainer.classList.remove("draw");
        }
        result.innerHTML = "Computer Wins!!!";
      }
    }
  }
  function computerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
      return "Stone";
    }
    if (choice == 1) {
      return "Paper";
    }
    if (choice == 2) {
      return "Scissor";
    }
  }
  function decision(player, computer) {
    if (player == computer) {
      if (main.classList.contains("win")) {
        main.classList.remove("win");
      }
      if (main.classList.contains("lose")) {
        main.classList.remove("lose");
      }
      if (!main.classList.contains("draw")) {
        main.classList.add("draw");
      }
      return "Draw";
    }
    if (player == "Paper" && computer == "Scissor") {
      ++computerScore;
      if (!main.classList.contains("lose")) {
        main.classList.add("lose");
      }
      if (main.classList.contains("win")) {
        main.classList.remove("win");
      }
      if (main.classList.contains("draw")) {
        main.classList.remove("draw");
      }
      return "Computer Wins";
    }
    if (player == "Stone" && computer == "Paper") {
      ++computerScore;
      if (!main.classList.contains("lose")) {
        main.classList.add("lose");
      }
      if (main.classList.contains("win")) {
        main.classList.remove("win");
      }
      if (main.classList.contains("draw")) {
        main.classList.remove("draw");
      }
      return "Computer Wins";
    }
    if (player == "Scissor" && computer == "Stone") {
      ++computerScore;
      if (!main.classList.contains("lose")) {
        main.classList.add("lose");
      }
      if (main.classList.contains("win")) {
        main.classList.remove("win");
      }
      if (main.classList.contains("draw")) {
        main.classList.remove("draw");
      }
      return "Computer Wins";
    }
    if (computer == "Paper" && player == "Scissor") {
      ++playerScore;
              if (!main.classList.contains("win")) {
          main.classList.add("win");
        }
        if (main.classList.contains("lose")) {
          main.classList.remove("lose");
        }
        if (main.classList.contains("draw")) {
          main.classList.remove("draw");
        }
      return "You Win";
    }
    if (computer == "Stone" && player == "Paper") {
      ++playerScore;
              if (!main.classList.contains("win")) {
          main.classList.add("win");
        }
        if (main.classList.contains("lose")) {
          main.classList.remove("lose");
        }
        if (main.classList.contains("draw")) {
          main.classList.remove("draw");
        }
      return "You Win";
    }
    if (computer == "Scissor" && player == "Stone") {
      ++playerScore;
              if (!main.classList.contains("win")) {
          main.classList.add("win");
        }
        if (main.classList.contains("lose")) {
          main.classList.remove("lose");
        }
        if (main.classList.contains("draw")) {
          main.classList.remove("draw");
        }
      return "You Win";
    }
  }
};
