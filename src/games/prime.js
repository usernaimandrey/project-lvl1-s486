import process from '..';
import generateNumber from '../utils';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  if (number < 2) return false;
  const maxDivider = number / 2;
  for (let divider = 2; divider < maxDivider; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};
const dataFlow = () => {
  const question = generateNumber(1, 20);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
export default () => process(description, dataFlow);
