import readlineSync from 'readline-sync';
import { hello } from './index.js';

const runGame = (createRound, description) => {
  const numberOfRounds = 3;

  const userName = hello(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const trueAnswerAndQuestion = createRound();
    const correctAnswer = trueAnswerAndQuestion[0];
    const quest = trueAnswerAndQuestion[1];

    console.log(quest);
    const userAnswer = readlineSync.question('Your answer:');

    if (correctAnswer != userAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;