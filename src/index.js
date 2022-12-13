import readlineSync from 'readline-sync';
import hello from './cli.js';
/* eslint-disable consistent-return */
const playGame = (createRound, description) => {
  const userName = hello();
  console.log(description);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, quest] = createRound();
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default playGame;
