import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import { TodoProvider } from './context/TodoContext';

import AppHeader from './components/layouts/AppHeader';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" render={props => (
          <React.Fragment>
            <TodoProvider>
              <AppHeader title={`Todo List`} />
              <TodoFilter />
              <TodoList />
              <TodoForm />
            </TodoProvider>
            <div className="mt-5">
              <Link to="/about">About App</Link>
            </div>
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
