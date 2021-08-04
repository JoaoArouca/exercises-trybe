/*  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
      'use strict';
      if (this == null) {
        throw new TypeError('não é possível converter ' + this + ' para um objeto');
      }
      var str = '' + this;
      count = +count;
      if (count != count) {
        count = 0;
      }
      if (count < 0) {
        throw new RangeError('o núm. de repetições não pode ser negativo');
      }
      if (count == Infinity) {
        throw new RangeError('o núm. de repetições deve ser menor que infinito');
      }
      count = Math.floor(count);
      if (str.length == 0 || count == 0) {
        return '';
      }
  
      // Ao Garantir que count seja um inteiro de 31 bits nos dá uma grande otimização
      // na parte principal. Porém, navegadores atuais (de agosto de 2014 pra cá)
      // não conseguem mais manipular strings de 1 << 28 chars ou maiores, então:
      if (str.length * count >= 1 << 28) {
        throw new RangeError('o núm. de repetições não deve estourar o tamanho máx. de uma string');
      }
      var rpt = '';
      for (var i = 0; i < count; i++) {
        rpt += str;
      }
      return rpt;
    }
  }
  console.log(rpt);