import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n What number is missing in the progression?\n');
const question = readlineSync.question('May I have your name? : ');
console.log(`Hello ${question} !\n`);
let push = 0;
for (let g = 1; g <= 3; g += 1) {
  const numberRndone = Math.floor(Math.random() * 100 - 1 + 1);
  push += 1;
  const arry = [];
  const stepofPrpgression = 1 + Math.floor(Math.random() * 3 + 1 - 1);
  for (let i = 1, j = 0; i <= 10; i += 1, j += stepofPrpgression) {
    arry.push(numberRndone + j);
  }
  const startindex = Math.floor(Math.random() * 10 - 1 + 1);
  const removarry = arry.splice(startindex, 1, '..');
  const anserQuestion = readlineSync.question(`Question: ${arry} \n Your answer: `);
  if (anserQuestion === removarry.toString()) {
    console.log('Correct!');
  } else {
    console.log(`${anserQuestion} is wrong answer ;(. Correct answer was ${removarry}.\n Let's try again, ${question}!`);
    break;
  }
  if (push === 3) {
    console.log(`Congratulations, ${question}!`);
  }
}
