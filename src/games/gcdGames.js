import randomNum from '../randomNum.js';
import playGame from '../index.js';

const getTrueAnswer = (answer) => (answer ? `${answer}` : false);

const createRound = () => {
  const firstNum = randomNum(0, 50);
  const secondNum = randomNum(0, 50);
  const correctAnswer = (a, b) => {
    if (b) {
      return correctAnswer(b, a % b);
    }
    return Math.abs(a);
  };
  const trueAnswer = getTrueAnswer(correctAnswer(firstNum, secondNum));
  const question = `Question: ${firstNum} ${secondNum}`;
  return [trueAnswer, question];
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  playGame(createRound, description);
};

export default startGcdGame;
