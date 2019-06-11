import proces from '..';
import generateNumber from '../generaitlib';


const description = 'What is the result of the expression?';
const dataFlow = () => {
  const numberRndone = generateNumber();
  const numberRndtow = generateNumber();
  const arrArifmet = [`${numberRndone} + ${numberRndtow}`, `${numberRndone} * ${numberRndtow}`, `${numberRndone} - ${numberRndtow}`];
  const arrValue = [numberRndone + numberRndtow,
    numberRndone * numberRndtow, numberRndone - numberRndtow];
  const indexArr = Math.floor(Math.random() * arrArifmet.length);
  const question = arrArifmet[indexArr];
  const rightAnswer = arrValue[indexArr].toString();
  return [question, rightAnswer];
};
export default () => proces(description, dataFlow);
