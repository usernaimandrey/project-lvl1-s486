import process from '..';
import generateNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = (numbone, numbtow) => {
  if (numbone === 0 || numbtow === 0) {
    return numbone + numbtow;
  }
  return greatestCommonDivisor(Math.max(numbone, numbtow) % Math.min(numbone, numbtow),
    Math.min(numbone, numbtow));
};
const dataFlow = () => {
  const numberRndone = generateNumber(1, 100);
  const numberRndtow = generateNumber(1, 100);
  const rightAnswer = `${greatestCommonDivisor(numberRndone, numberRndtow)}`;
  const question = `${numberRndone} ${numberRndtow}`;
  return [question, rightAnswer];
};
export default () => process(description, dataFlow);
