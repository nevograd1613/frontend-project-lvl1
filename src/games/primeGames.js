import { getRandomInt } from '../index.js';
import runGame from '../runGames.js';

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
  const randomNum = getRandomInt(1, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(createRound, description);
};

export default startPrimeGame;