import process from '..';
import generateNumber from '../utils';

const description = 'What number is missing in the progression?';
const length = 10;

const dataFlow = () => {
  const hiddenElementPosition = generateNumber(0, length - 1);
  const startElement = generateNumber(1, 50);
  const stepOfPrpgression = generateNumber(1, 4);

  const rightAnswer = `${startElement + stepOfPrpgression * hiddenElementPosition}`;
  const progression = [];
  let question = '';

  for (let i = 0; i < length; i += 1) {
    if (i !== hiddenElementPosition) {
      progression.push(startElement + stepOfPrpgression * i);
    } else {
      progression[hiddenElementPosition] = '..';
    }
  }
  question = progression.join(' ');
  return [question, rightAnswer];
};

export default () => process(description, dataFlow);
