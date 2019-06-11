import proces from '..';
import generateNumber from '../generaitlib';

const description = 'What number is missing in the progression?';
const dataFlow = () => {
  const question = [];
  const startElrment = generateNumber();
  const stepOfPrpgression = 1 + Math.floor(Math.random() * 3 + 1 - 1);
  for (let i = 1, j = 0; i <= 10; i += 1, j += stepOfPrpgression) {
    question.push(startElrment + j);
  }
  const startindex = Math.floor(Math.random() * 10 - 1 + 1);
  const rightAnswer = question.splice(startindex, 1, '..').toString();
  return [question, rightAnswer];
};
export default () => proces(description, dataFlow);
