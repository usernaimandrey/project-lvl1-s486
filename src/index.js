import readlineSync from 'readline-sync';

const haveYourName = () => {
  const userName = readlineSync.question('May I have your name? : ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};
const numberOfRounds = 3;
const process = (description, dataFlow) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = haveYourName();
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, rightAnswer] = dataFlow();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. `);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === numberOfRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default process;
