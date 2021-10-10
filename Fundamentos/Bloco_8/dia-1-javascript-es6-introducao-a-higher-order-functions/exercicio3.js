const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const correction = (arrayCorreto, arrayAluno, callback) => {
  return callback(arrayAluno, arrayCorreto);
}
const corretor = (arrayAluno, arrayCorreto) => {
  let somaPontos = 0;
  for (let index = 0; index < arrayAluno.length; index += 1) {
    if (arrayAluno[index] === arrayCorreto[index]) {
        somaPontos += 1;
    } if (arrayAluno[index] === 'N.A') {
        console.log(`Questão ${index} não possui resposta`);
        somaPontos += 0.5;
    } if (arrayAluno[index] !== arrayCorreto[index]) {
        somaPontos -= 0.5;
  }
}
  console.log(somaPontos);
}
correction(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor);

