import { getRandomInt } from '../index.js';
import runGame from '../runGames.js';

const createProgression = (progressionLength, randomNum) => {
  let firstElem = randomNum;
  const newProgression = [];
  const increaseProgression = getRandomInt(0, 5);
  for (let i = 0; i < progressionLength; i += 1) {
    newProgression.push(firstElem += increaseProgression);
  }
  return newProgression;
};

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const progressionLength = getRandomInt(5, 10);
  const randomElem = getRandomInt(0, progressionLength);

  const progressionCollection = createProgression(progressionLength, randomNum);
  const trueAnswer = progressionCollection[randomElem];
  progressionCollection[randomElem] = '..';
  const question = `Question: ${progressionCollection.join(' ')}`;

  return [trueAnswer, question];
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGame(createRound, description);
};

export default startProgressionGame;
