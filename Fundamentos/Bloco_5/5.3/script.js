function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function appendNumbers() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dayNum = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index++) {
    const num = dezDaysList[index];
    const dayListNum = document.createElement('li');
    dayListNum.innerText = num;
    dayListNum.classList.add('day');

    dayNum.appendChild(dayListNum);
  }
};

appendNumbers();

let str = 'Feriados';
function holiday (str) {
  let button = document.createElement('button');
  const divButton = document.querySelector('.buttons-container');
  button.innerText = 'Feriados';
  button.id = 'btn-holiday';
  divButton.appendChild(button);
};

holiday();

function changeBG () {
  const holidayBtn = document.getElementById('btn-holiday');
  holidayBtn.addEventListener('click', function() {
    let feriados = document.getElementsByClassName('day');
    console.log(feriados);
    for (let index = 0; index < feriados.length; index++) {
      /* feriados[index].classList.toggle('day'); */
      feriados[index].style.backgroundColor = 'green';
      feriados[index].style.color = 'black';
    }
  });
};
changeBG();

let sexta = 'Sexta-feira';
function friday (sexta) {
  let sexBtn = document.createElement('button');
  let divCont = document.querySelector('.buttons-container');
  sexBtn.id = 'btn-friday';
  sexBtn.innerText = 'Sexta-feira';
  divCont.appendChild(sexBtn);  
}
friday();

function changeFriday () {
  const fridayBtn = document.getElementById('btn-friday');
  fridayBtn.addEventListener('click', function () {
    let liDays = document.getElementsByClassName('day');
    liDays[5].innerText = 'SEXTOU';
    liDays[12].innerText = 'SEXTOU';
    liDays[19].innerText = 'SEXTOU';
    liDays[26].innerText = 'SEXTOU';
  })
};
changeFriday();

function zoom (evt) {
  evt.target.style.fontSize = '30px';
}

const ul = document.getElementById('days');
ul.addEventListener('mouseover', zoom);

