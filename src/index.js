import readlineSync from 'readline-sync';
/* eslint-disable consistent-return */
const numberOfRounds = 3;
const playGame = (createRound, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, quest] = createRound();
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default playGame;
