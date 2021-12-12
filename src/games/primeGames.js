import randomNum from '../randomNum.js';
import playGame from '../index.js';

const prime = (num) => {
  if (num === 2 || num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getTrueAnswer = (number) => (prime(number) ? 'yes' : 'no');

const createRound = () => {
  const randomNumber = randomNum(1, 100);
  const trueAnswer = getTrueAnswer(randomNumber);
  const question = `Question: ${randomNumber}`;
  return [trueAnswer, question];
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(createRound, description);
};

export default startPrimeGame;
