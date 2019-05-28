import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n Find the greatest common divisor of given numbers.\n');
const question = readlineSync.question('May I have your name?  ');
console.log(`Hello, ${question}!\n`);
let push = 0;
for (let i = 1; i <= 3; i += 1) {
  push += 1;
  const numberRndone = Math.floor(Math.random() * (100 - 1 + 1));
  const numberRndtow = Math.floor(Math.random() * (100 - 1 + 1));
  const numbMin = Math.min(numberRndone, numberRndtow);
  const numbMax = Math.max(numberRndone, numberRndtow);
  const greatestCommonDivisor = (numbMax, numbMin) => {
    if (numbMin === 0) {
      return numbMax;
    }
    return greatestCommonDivisor(numbMin, numbMax % numbMin);
  };
  const regreatestCommonDivisor = greatestCommonDivisor(numbMax, numbMin);
  const anserQuestion = readlineSync.question(`Question: ${numberRndone} ${numberRndtow} \n Your answer: `);
  if (anserQuestion === regreatestCommonDivisor.toString()) {
    console.log('Correct!');
  } else {
    console.log(`${anserQuestion} is wrong answer ;(. Correct answer was ${regreatestCommonDivisor}.\n Let's try again, ${question}!`);
    break;
  }
  if (push === 3) {
    console.log(`Congratulations, ${question}!`);
  }
}
