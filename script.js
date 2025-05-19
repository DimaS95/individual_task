const choices = document.querySelectorAll('.choice');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

const resources = {
	'rock': 'камінь',
	'paper': 'папір',
	'scissors': 'ножиці'
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
};

const getResult = (user, computer) => {
  if (user === computer) return "Нічия!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    userScore++;
    return "Ти переміг!";
  } else {
    computerScore++;
    return "Комп'ютер переміг!";
  }
};

choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `Ти вибрав ${resources[userChoice]}, комп'ютер вибрав ${resources[computerChoice]}. ${result}`;
  });
});
