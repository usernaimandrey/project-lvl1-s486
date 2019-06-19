import process from '..';
import generateNumber from '../utils';

const description = 'What number is missing in the progression?';
const dataFlow = () => {
  const question = [];
  const numberOfElementsProgression = 10;
  const startElrment = generateNumber(1, 100);
  const stepOfPrpgression = 1 + generateNumber(1, 3);
  for (let i = 1, j = 0; i <= numberOfElementsProgression; i += 1, j += stepOfPrpgression) {
    question.push(startElrment + j);
  }
  const startindex = Math.floor(Math.random() * 10 - 1 + 1);
  const rightAnswer = question.splice(startindex, 1, '..').toString();
  return [question, rightAnswer];
};
export default () => process(description, dataFlow);
