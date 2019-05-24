/* eslint-disable no-eval */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n What is the result of the expression?\n');
const question = readlineSync.question('May I have your name? : ');
console.log(`Hello ${question} !\n`);
let push = 0;
for (let i = 1; i <= 3; i += 1) {
  push += 1;
  const numberRndone = Math.floor(Math.random() * (100 - (-100)) + (-100));
  const numberRndtow = Math.floor(Math.random() * (100 - (-100)) + (-100));
  const arr = [`${numberRndone} + ${numberRndtow}`, `${numberRndone} * ${numberRndtow}`, `${numberRndone} - ${numberRndtow}`];
  const rand = arr[Math.floor(Math.random() * arr.length)];
  const value = eval(rand);
  const anserQuestion = readlineSync.question(`Question: ${rand} \n Your answer: `);
  if (anserQuestion === value.toString()) {
    console.log('Correct!');
  } else {
    console.log(`${anserQuestion} is wrong answer ;(. Correct answer was ${value}.\n Let's try again, ${question}!`);
    break;
  }
  if (push === 3) {
    console.log(`Congratulations, ${question}!`);
  }
}
