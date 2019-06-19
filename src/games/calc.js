import process from '..';
import generateNumber from '../utils';

const operations = ['*', '+', '-'];
const description = 'What is the result of the expression?';
const dataFlow = () => {
  const numberRndone = generateNumber(1, 50);
  const numberRndtow = generateNumber(1, 50);
  const operation = operations[generateNumber(0, operations.length - 1)];
  const question = `${numberRndone} ${operation} ${numberRndtow}`;
  let rightAnswer;
  switch (operation) {
    case '+':
      rightAnswer = numberRndone + numberRndtow;
      break;
    case '-':
      rightAnswer = numberRndone - numberRndtow;
      break;
    case '*':
      rightAnswer = numberRndone * numberRndtow;
      break;
    default:
      break;
  }
  return [question, rightAnswer.toString()];
};
export default () => process(description, dataFlow);
