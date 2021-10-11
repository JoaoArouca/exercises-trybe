const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


const letterAcount = names.reduce((acc, cur) => acc + cur.split('').reduce((result, letter) => letter === 'A' || letter === 'a' ? result + 1 : result, 0), 0);
console.log(letterAcount);
