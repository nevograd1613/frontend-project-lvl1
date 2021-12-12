import randomNum from '../randomNum.js';
import runGame from '../index.js';

const getTrueAnswer = (a, b) => {
  if (b) {
    return getTrueAnswer(b, a % b);
  }
  return Math.abs(a);
};

const createRound = () => {
  const firstNum = randomNum(0, 50);
  const secondNum = randomNum(0, 50);
  const trueAnswer = getTrueAnswer(firstNum, secondNum);
  const question = `Question: ${firstNum} ${secondNum}`;
  return [trueAnswer, question];
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  runGame(createRound, description);
};

export default startGcdGame;
