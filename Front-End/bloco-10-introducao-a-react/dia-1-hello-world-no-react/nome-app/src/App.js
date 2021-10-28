import React from 'react';
import './App.css';

const toDoList = ['Read', 'Study', 'Workout', 'Work'];
const Task = (values) => {
  return (
    <ul>
      { values.map((value) => <li>{value}</li>) }
    </ul>
  )
}

function App() {
  return (Task(toDoList));
}

export default App;

/* A ideia do exercício era introduzir o React no meu escopo de skills, além de aprender a utilizá-lo junto com HoFs */
