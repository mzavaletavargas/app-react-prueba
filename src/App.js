import React from 'react';
import TodoList from './TodoList';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Navigation';
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
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/pagina1">
            <div>
              Hola Esta es la página uno
              </div>
          </Route>

          <Route path="/pagina2">
            <TodoList list={dataList}> </TodoList>

          </Route>

          <Route path="/">
            <div>
              Esta es la ruta base
            </div>
          </Route>
        </Switch>


      </div>
    </Router>
  );
}
