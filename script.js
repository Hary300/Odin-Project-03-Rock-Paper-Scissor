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

function getHumanChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let humanChoice = prompt('Pick one: Rock/Paper/Scissors');

  if (humanChoice === null) return null;

  while (
    humanChoice !== null &&
    !choices.includes(humanChoice.trim().toLowerCase())
  ) {
    humanChoice = prompt('Only Rock/Paper/Scissors');
  }
  return humanChoice;
}

function playGame(max) {
  let computerScore = 0;
  let humanScore = 0;

  let round = 1;
  while (round <= max) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection === null) return;

    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {
      const lowerCaseHumanChoice = humanChoice.toLowerCase();
      if (computerChoice === 'rock') {
        if (lowerCaseHumanChoice === 'paper') {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
You win. Paper beats Rock`);
          humanScore++;
        } else if (lowerCaseHumanChoice === 'scissors') {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
You lose. Rock beats scissors`);
          computerScore++;
        } else {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
Draw`);
        }
      }

      if (computerChoice === 'scissors') {
        if (lowerCaseHumanChoice === 'paper') {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
You lose. Scissors beat Paper`);
          computerScore++;
        } else if (lowerCaseHumanChoice === 'rock') {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
You win. Rock beats scissors`);
          humanScore++;
        } else {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
Draw`);
        }
      }

      if (computerChoice === 'paper') {
        if (lowerCaseHumanChoice === 'rock') {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
You lose. paper beats Rock`);
          computerScore++;
        } else if (lowerCaseHumanChoice === 'scissors') {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
You win. scissors beat Paper`);
          humanScore++;
        } else {
          console.log(`Computer: ${computerChoice}
Human: ${lowerCaseHumanChoice}
Draw`);
        }
      }
    }

    round++;
  }

  console.log('Final Score');
  console.log('Computer: ', computerScore);
  console.log('Human: ', humanScore);
  if (computerScore > humanScore) {
    console.log('You Lose');
  } else if (computerScore < humanScore) {
    console.log('You Win');
  } else {
    console.log('Draw');
  }
}

playGame(3);
