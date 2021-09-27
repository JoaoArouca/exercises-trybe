const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

 /* Função para adicionar propriedades e valores ao objeto */ 
const turnoLessons2 = (x, newkey, newValue) => {
    x[newkey] = newValue;
    console.table(x);
}
turnoLessons2(lesson2, 'turno', 'manhã');

/* Função de listar chaves de objetos */
const listKeys = (x) => {
    console.table(Object.keys(x));
}
listKeys(lesson2);

/* Função de listar valores de objetos */
const listValues = (x) => {
    console.table(Object.values(x));
}
listValues(lesson2);

/* Função para monstrar as entradas de um objeto */
const tamanhaObjeto = (x) => {
    console.table(Object.entries(x));
}
tamanhaObjeto(lesson1);

/* Função all lessons */
const allClass = (x, y, z) => {    
}
/* allClass(lesson1, lesson2, lesson3); */