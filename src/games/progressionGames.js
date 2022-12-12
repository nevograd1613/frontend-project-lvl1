import randomNum from '../randomNum.js';
import playGame from '../index.js';

const createProgression = (progressionLength, randomNumber) => {
  let firstElem = randomNumber;
  const newProgression = [];
  const increaseProgression = randomNum(0, 5);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    newProgression.push(firstElem += increaseProgression);
  }
  return newProgression;
};

const getTrueAnswer = (answer) => (answer ? `${answer}` : false);

const createRound = () => {
  const randomNumber = randomNum(0, 100);
  const progressionLength = randomNum(5, 10);
  const randomElem = randomNum(0, progressionLength - 1);

  const progressionCollection = createProgression(progressionLength, randomNumber);
  const trueAnswer = getTrueAnswer(progressionCollection[randomElem]);
  progressionCollection[randomElem] = '..';
  const question = `Question: ${progressionCollection.join(' ')}`;

  return [trueAnswer, question];
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  playGame(createRound, description);
};

export default startProgressionGame;
