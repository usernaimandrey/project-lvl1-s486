import process from '..';
import generateNumber from '../utils';

const description = 'What number is missing in the progression?';
const length = 10;

const dataFlow = () => {
  const hiddenElement = generateNumber(0, length - 1);
  const startElement = generateNumber(1, 50);
  const stepOfPrpgression = generateNumber(1, 4);

  const rightAnswer = `${startElement + stepOfPrpgression * hiddenElement}`;
  const progression = [];
  let question = '';

  for (let i = 0; i <= length; i += 1) {
    progression.push(startElement + stepOfPrpgression * i);
    if (i === hiddenElement) {
      progression[hiddenElement] = '..';
    }
    question += `${progression[i]} `;
  }
  return [question, rightAnswer];
};

export default () => process(description, dataFlow);
