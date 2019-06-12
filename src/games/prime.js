import proces from '..';
import generateNumber from '../generaitlib';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (numb) => {
  if (numb < 2) return false;
  const maxDivider = numb / 2;
  for (let divider = 2; divider < maxDivider; divider += 1) {
    if (numb % divider === 0) {
      return false;
    }
  }
  return true;
};
const dataFlow = () => {
  const question = generateNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
export default () => proces(description, dataFlow);
