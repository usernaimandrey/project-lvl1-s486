import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n Answer "yes" if number even otherwise answer "no".\n');

const question = readlineSync.question('May I have your name? : ');
console.log(`Hello ${question} !\n`);
let push = 0;
for (let i = 1; i <= 3; i += 1) {
  push += 1;
  const numberRnd = Math.floor(Math.random() * (100 - 1)) + 1;
  const after = numberRnd % 2;
  const answerquestion = readlineSync.question(`Question: ${numberRnd} \n Your answer: `);
  if (after === 0 && answerquestion === 'yes') {
    console.log('Correct!');
  }
  if (after !== 0 && answerquestion === 'no') {
    console.log('Correct!');
  }
  if (after === 0 && answerquestion === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${question} !`);
    break;
  }
  if (after !== 0 && answerquestion === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${question} !`);
    break;
  }
  if (after !== 0 && answerquestion !== 'yes' && answerquestion !== 'no') {
    console.log(`${answerquestion} is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${question} !`);
    break;
  }
  if (after === 0 && answerquestion !== 'yes' && answerquestion !== 'no') {
    console.log(`${answerquestion} is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${question} !`);
    break;
  }
  if (push === 3) {
    console.log(`Congratulations, ${question}!`);
  }
}
