import readlineSync from 'readline-sync';

const hello = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);
  return userName;
};

const numberOfRounds = 3;
/* eslint-disable consistent-return */
const runGame = (createRound, description) => {
  const userName = hello(description);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, quest] = createRound();
    console.log(quest);
    const userAnswer = readlineSync.question('Your answer:');
    // eslint-disable-next-line eqeqeq
    if (userAnswer != correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
