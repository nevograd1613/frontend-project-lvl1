import { getRandomInt } from '../index.js';
import runGame from '../runGames.js';

const even = (number) => number % 2 === 0;

const getTrueAnswer = (num) => (even(num) ? 'yes' : 'no');

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;

  return [trueAnswer, question];
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(createRound, description);
};

export default startEvenGame;
