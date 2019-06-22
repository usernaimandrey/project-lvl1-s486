import process from '..';
import generateNumber from '../utils';

const operations = ['*', '+', '-'];
const description = 'What is the result of the expression?';

const dataFlow = () => {
  const a = generateNumber(1, 50);
  const b = generateNumber(1, 50);
  const operation = operations[generateNumber(0, operations.length - 1)];
  const question = `${a} ${operation} ${b}`;
  let rightAnswer;

  switch (operation) {
    case '+':
      rightAnswer = `${a + b}`;
      break;
    case '-':
      rightAnswer = `${a - b}`;
      break;
    case '*':
      rightAnswer = `${a * b}`;
      break;
    default:
      break;
  }
  return [question, rightAnswer];
};

export default () => process(description, dataFlow);
