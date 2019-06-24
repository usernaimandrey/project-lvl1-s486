import process from '..';
import generateNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  const numberMax = Math.max(a, b);
  const numberMin = Math.min(a, b);
  if (a === 0 || b === 0) {
    return a + b;
  }
  return greatestCommonDivisor(numberMax % numberMin, numberMin);
};

const dataFlow = () => {
  const numberOne = generateNumber(1, 30);
  const numberTwo = generateNumber(1, 30);
  const rightAnswer = `${greatestCommonDivisor(numberOne, numberTwo)}`;
  const question = `${numberOne} ${numberTwo}`;
  return [question, rightAnswer];
};

export default () => process(description, dataFlow);
