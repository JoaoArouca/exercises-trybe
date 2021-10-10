// escreva sum abaixo
const sum = (...param) => {
  let soma = 0;
  param.forEach((value) => {
    soma += value;
  })
  return soma;
};

console.log(sum(1,2,3,4,5));
