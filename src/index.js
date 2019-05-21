import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n Answer "yes" if number even otherwise answer "no".');

const question = readlineSync.question('May I have your name? : ');
console.log(`Hello ${question} !`);
const numberone = readlineSync.question('Question: 15 \n Your answer: ');
if (numberone === 'no') {
  console.log('Correct!');
} else {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${question} !`);
}
const numbertow = readlineSync.question('Question: 6 \n Your answer: ');
if (numbertow !== 'yes') {
  console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${question} !`);    
} else {
  console.log('Correct!');
};
