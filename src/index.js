import readlineSync from 'readline-sync';
/* eslint-disable consistent-return */
const playGame = (createRound, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
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
