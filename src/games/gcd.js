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
  const c = generateNumber(1, 30);
  const d = generateNumber(1, 30);
  const rightAnswer = `${greatestCommonDivisor(c, d)}`;
  const question = `${c} ${d}`;
  return [question, rightAnswer];
};

export default () => process(description, dataFlow);
