import readlineSync from 'readline-sync';

export const rullesEven = 'Answer "yes" if number even otherwise answer "no".';
export default () => {
  const getName = readlineSync.question('May I have your name? : ');
  console.log(`Hello ${getName} !\n`);
  const round = 3;
  for (let i = round; i > 0; i -= 1) {
    const generateNumberone = Math.floor(Math.random() * (100 - 1 + 1));
    const remainderOfdivision = generateNumberone % 2;
    const answerquestion = readlineSync.question(`Question: ${generateNumberone} \n Your answer: `);
    if (remainderOfdivision === 0 && answerquestion === 'yes') {
      console.log('Correct!');
    }
    if (remainderOfdivision !== 0 && answerquestion === 'no') {
      console.log('Correct!');
    }
    if (remainderOfdivision === 0 && answerquestion === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${getName} !`);
      break;
    }
    if (remainderOfdivision !== 0 && answerquestion === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${getName} !`);
      break;
    }
    if (remainderOfdivision !== 0 && answerquestion !== 'yes' && answerquestion !== 'no') {
      console.log(`${answerquestion} is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${getName} !`);
      break;
    }
    if (remainderOfdivision === 0 && answerquestion !== 'yes' && answerquestion !== 'no') {
      console.log(`${answerquestion} is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${getName} !`);
      break;
    }
    if (i === 1) {
      console.log(`Congratulations, ${getName}!`);
    }
  }
};
