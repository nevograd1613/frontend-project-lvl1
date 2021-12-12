import randomNum from '../randomNum.js';
import runGame from '../index.js';

const even = (number) => number % 2 === 0;

const getTrueAnswer = (num) => (even(num) ? 'yes' : 'no');

const createRound = () => {
  const randomNumber = randomNum(0, 100);
  const trueAnswer = getTrueAnswer(randomNumber);
  const question = `Question: ${randomNumber}`;

  return [trueAnswer, question];
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(createRound, description);
};

export default startEvenGame;
