import { getRandomInt } from '../index.js';
import runGame from '../runGames.js';

const getTrueAnswer = (a, operation, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const createRound = () => {
  const operand = ['+', '-', '*'];

  const randomOperand = operand[getRandomInt(0, operand.length)];
  const firstNum = getRandomInt(10, 40);
  const secondNum = getRandomInt(10, 40);
  const question = `Question: ${firstNum} ${randomOperand} ${secondNum}`;
  const trueAnswer = getTrueAnswer(firstNum, randomOperand, secondNum);

  return [trueAnswer, question];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(createRound, description);
};

export default startCalcGame;
