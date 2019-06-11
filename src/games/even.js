import proces from '..';
import generateNumber from '../generaitlib';

const description = 'Answer "yes" if number even otherwise answer "no".';
const dataFlow = () => {
  const question = generateNumber();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};
export default () => proces(description, dataFlow);
