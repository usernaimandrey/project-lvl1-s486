import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n Answer "yes" if given number is prime. Otherwise answer "no".\n');

const question = readlineSync.question('May I have your name? : ');
console.log(`Hello ${question} !\n`);
let push = 0;
for (let j = 1; j <= 3; j += 1) {
  push += 1;
  const numberRndone = Math.floor(Math.random() * (100 - 1 + 1));
  const prime = () => {
    if (numberRndone === 2) {
      return true;
    }
    let result = 0;
    for (let i = 2; i < numberRndone; i += 1) {
      result = numberRndone % i;
      if (result === 0) {
        return false;
      }
      if (result !== 0 && i === numberRndone - 1) {
        return true;
      }
    }
  };
  const answerquestion = readlineSync.question(`Question: ${numberRndone} \n Your answer: `);
  if (answerquestion === 'yes' && prime(numberRndone) === true) {
    console.log('Correct!');
  }
  if (answerquestion === 'no' && prime(numberRndone) === false) {
    console.log('Correct!');
  }
  if (answerquestion === 'yes' && prime(numberRndone) === false) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${question} !`);
    break;
  }
  if (answerquestion === 'no' && prime(numberRndone) === true) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${question} !`);
    break;
  }
  if (answerquestion !== 'no' && answerquestion !== 'yes' && prime(numberRndone) === true) {
    console.log(`${answerquestion} is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${question} !`);
    break;
  }
  if (answerquestion !== 'no' && answerquestion !== 'yes' && prime(numberRndone) === false) {
    console.log(`${answerquestion} is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${question} !`);
    break;
  }
  if (push === 3) {
    console.log(`Congratulations, ${question}!`);
  }
}
