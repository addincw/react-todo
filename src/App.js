import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import AppHeader from './components/layouts/AppHeader';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import About from './pages/About';
import { setPageTitle } from './store/actions/page';

class App extends Component {
  // componentDidMount() {
  //   fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
  //     .then(response => response.json())
  //     .then(todos => {
  //       todos.forEach(todo => {

  //         this.setState({ 
  //             todos: [...this.state.todos, {
  //               id: todo.id,
  //               name: todo.title,
  //               is_complete: todo.completed,
  //               is_disable: false
  //             }]
  //         })

  //       })

  //       this.setState({ todos_display: [...this.state.todos] })
  //     })
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={props => {
            this.props.setPageTitle('home')

            return (
              <React.Fragment>
                <AppHeader title={`Todo List`} />
                <TodoFilter />
                <TodoList />
                <TodoForm />
                <div className="mt-5">
                  <Link to="/about">About App</Link>
                </div>
              </React.Fragment>
            )
          }} />

          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }

}

export default connect(null, { setPageTitle })(App);
