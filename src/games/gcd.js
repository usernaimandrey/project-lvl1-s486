import proces from '..';
import generateNumber from '../generaitlib';

const description = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = (numbone, numbtow) => {
  if (numbone === 0 || numbtow === 0) {
    return numbone + numbtow;
  }
  return greatestCommonDivisor(Math.max(numbone, numbtow) % Math.min(numbone, numbtow),
    Math.min(numbone, numbtow));
};
const dataFlow = () => {
  const numberRndone = generateNumber();
  const numberRndtow = generateNumber();
  const rightAnswer = `${greatestCommonDivisor(numberRndone, numberRndtow)}`;
  const question = `${numberRndone} ${numberRndtow}`;
  return [question, rightAnswer];
};
export default () => proces(description, dataFlow);
