import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n What is the result of the expression?\n');
const question = readlineSync.question('May I have your name? : ');
console.log(`Hello ${question} !\n`);
let push = 0;
for (let i = 1; i <= 3; i += 1) {
  push += 1;
  const numberRndone = Math.floor(Math.random() * (100 - (-100)) + (-100));
  const numberRndtow = Math.floor(Math.random() * (100 - (-100)) + (-100));
  const arrArifmet = [`${numberRndone} + ${numberRndtow}`, `${numberRndone} * ${numberRndtow}`, `${numberRndone} - ${numberRndtow}`];
  const arrValue = [numberRndone + numberRndtow,
    numberRndone * numberRndtow, numberRndone - numberRndtow];
  const indexArr = Math.floor(Math.random() * arrArifmet.length);
  const elementarrArifmet = arrArifmet[indexArr];
  const elementArrValue = arrValue[indexArr];
  const anserQuestion = readlineSync.question(`Question: ${elementarrArifmet} \n Your answer: `);
  if (anserQuestion === elementArrValue.toString()) {
    console.log('Correct!');
  } else {
    console.log(`${anserQuestion} is wrong answer ;(. Correct answer was ${elementArrValue}.\n Let's try again, ${question}!`);
    break;
  }
  if (push === 3) {
    console.log(`Congratulations, ${question}!`);
  }
}
