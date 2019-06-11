import proces from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const dataFlow = () => {
  const question = Math.floor(Math.random() * 100 - 1 + 1);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};
export default () => proces(description, dataFlow);
