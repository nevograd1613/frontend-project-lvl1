import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
const hello = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);
  return userName;
};
const runGame = (createRound, description) => {
  const numberOfRounds = 3;

  const userName = hello(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const trueAnswerAndQuestion = createRound();
    const correctAnswer = trueAnswerAndQuestion[0];
    const quest = trueAnswerAndQuestion[1];

    console.log(quest);
    const userAnswer = readlineSync.question('Your answer:');

    // eslint-disable-next-line eqeqeq
    if (correctAnswer != userAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
const even = (number) => number % 2 === 0;
const getTrueAnswer = (num) => (even(num) ? 'yes' : 'no');
const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;

  return [trueAnswer, question];
};
const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(createRound, description);
};
startGame();
