import React from 'react';
import TodoList from './TodoList';
import './App.css';

export default function App() {
  const dataList = [
    {
      id: 1,
      task: 'Lavarme los dientes a las 10am'
    },
    {
      id: 2,
      task: 'Sacar a pasear al perro a las 12pm'
    },
    {
      id: 3,
      task: 'comprar almuerzo'
    }
  ]

  return (

    <div className="App">
      <TodoList list={dataList}> </TodoList>
    </div>
  );
}
