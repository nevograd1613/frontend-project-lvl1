import runGame from '../index.js';
import randomNum from '../randomNum.js';

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

  const randomOperand = operand[randomNum(0, 2)];
  const firstNum = randomNum(1, 10);
  const secondNum = randomNum(1, 10);
  const question = `Question: ${firstNum} ${randomOperand} ${secondNum}`;
  const trueAnswer = getTrueAnswer(firstNum, randomOperand, secondNum);

  return [trueAnswer, question];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(createRound, description);
};

export default startCalcGame;
