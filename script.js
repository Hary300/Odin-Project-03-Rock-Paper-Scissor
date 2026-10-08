const buttonElements = document.querySelectorAll('button');
const roundElement = document.querySelector('.round');
const computerScoreElement = document.querySelector('.computer-score');
const humanScoreElement = document.querySelector('.human-score');
const computerChoiceElement = document.querySelector('.computer-choice');
const humanChoiceElement = document.querySelector('.human-choice');
const roundResultTitleElement = document.querySelector('.round-result-title');
const finalResultElement = document.querySelector('.final-result');
const roundResultElement = document.querySelector('.round-result');
const roundResultTextElement = document.querySelector('.round-result-text');

let computerScore = 0;
let humanScore = 0;

let round = 1;
const maxRound = 5;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 10 + 1);
  if (number >= 8) {
    return 'paper';
  } else if (number >= 5) {
    return 'rock';
  } else {
    return 'scissors';
  }
}

buttonElements.forEach((el) =>
  el.addEventListener('click', (event) => {
    const humanChoice = event.currentTarget.dataset.selection;
    const computerChoice = getComputerChoice();
    round++;
    if (round <= maxRound) {
      roundElement.textContent = round;
    }

    if (round > maxRound) {
      buttonElements.forEach((el) => (el.disabled = true));
      playRound(humanChoice, computerChoice);
      console.log(humanScore, computerScore, '39');
      showFinalResult();
    } else {
      playRound(humanChoice, computerChoice);
    }
  })
);

function playRound(humanChoice, computerChoice) {
  if (computerChoice === 'rock') {
    if (humanChoice === 'paper') {
      showRoundResult(humanChoice, computerChoice, 'You win. 📄 beats 🪨');
      humanScore++;
    } else if (humanChoice === 'scissors') {
      showRoundResult(humanChoice, computerChoice, 'You lose. 🪨 beats ✂️');
      computerScore++;
    } else {
      showRoundResult(humanChoice, computerChoice, 'Draw');
    }
  }

  if (computerChoice === 'scissors') {
    if (humanChoice === 'rock') {
      showRoundResult(humanChoice, computerChoice, 'You win. 🪨 beats ✂️');
      humanScore++;
    } else if (humanChoice === 'paper') {
      showRoundResult(humanChoice, computerChoice, 'You lose. ✂️ beat 📄');
      computerScore++;
    } else {
      showRoundResult(humanChoice, computerChoice, 'Draw');
    }
  }

  if (computerChoice === 'paper') {
    if (humanChoice === 'scissors') {
      showRoundResult(humanChoice, computerChoice, 'You win. ✂️ beat 📄');
      humanScore++;
    } else if (humanChoice === 'rock') {
      showRoundResult(humanChoice, computerChoice, 'You lose. 📄 beats 🪨');
      computerScore++;
    } else {
      showRoundResult(humanChoice, computerChoice, 'Draw');
    }
  }
  renderScore();
}

function renderScore() {
  computerScoreElement.textContent = computerScore;
  humanScoreElement.textContent = humanScore;
}

function showRoundResult(humanChoice, computerChoice, textResult) {
  const icons = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️',
  };
  humanChoiceElement.textContent = icons[humanChoice];
  computerChoiceElement.textContent = icons[computerChoice];
  roundResultTextElement.textContent = textResult;
  roundResultTitleElement.textContent = round - 1;

  roundResultElement.classList.add('show-result');
}

function showFinalResult() {
  if (computerScore > humanScore) {
    finalResultElement.querySelector('p').textContent = '👎 You lose!';
  } else if (computerScore < humanScore) {
    finalResultElement.querySelector('p').textContent = '🏆 You Win!';
  } else {
    finalResultElement.querySelector('p').textContent = 'Draw';
  }
  finalResultElement.classList.add('show-result');
}
