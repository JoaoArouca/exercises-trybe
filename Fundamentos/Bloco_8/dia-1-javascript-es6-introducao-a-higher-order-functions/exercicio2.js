const prizeDraw = (num, callback) => {
  const drawnNumber = Math.floor(Math.random() * 5) + 1;
  console.log(drawnNumber);
  return callback(num, drawnNumber);
}

const luckyOrNot = (betNumber, drawnNumber) => {
  if (betNumber === drawnNumber) {
    console.log('Parabéns você ganhou');
  } else {
    console.log('Tente novamente');
  }
}
prizeDraw(2, luckyOrNot);