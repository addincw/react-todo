import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import AppHeader from './components/layouts/AppHeader';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import About from './pages/About';

class App extends Component {
  state = {
    todos: [],
    todos_display: []
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then(response => response.json())
      .then(todos => {
        todos.forEach(todo => {
          
          this.setState({ 
              todos: [...this.state.todos, {
                id: todo.id,
                name: todo.title,
                is_complete: todo.completed,
                is_disable: false
              }]
          })

        })

        this.setState({ todos_display: [...this.state.todos] })
      })
  }

  addTodo = async (name) => {
      await this.setState({ 
          todos: [...this.state.todos, {
            id: uuid(),
            name,
            is_complete: false,
            is_disable: false
          }] 
      })

      this.setState({ todos_display: [...this.state.todos] })
  }
  deleteTodo = async (id) => {
      await this.setState({ 
          todos: this.state.todos.filter(todo => {
            if(todo.id !== id) return todo
          }) 
      })

      this.setState({ todos_display: [...this.state.todos] })
  }
  filterTodo = ({filter_is_complete, filter_title}) => {
    this.setState({
      todos_display: this.state.todos.filter(todo => {
        if(!filter_is_complete) {
          return todo.name.includes(filter_title)
        }

        return todo.is_complete === filter_is_complete && todo.name.includes(filter_title)
      })
    })
  }
  toggleCompleteTodo = (id) => {
      // console.log(`todo id:${id} check is changed from app.js..`)
      this.setState({ 
          todos: this.state.todos.map(todo => {
            if(todo.id === id) {
              todo.is_complete = !todo.is_complete
            }

            return todo
          }) 
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AppHeader title={`Todo List`} />
              <TodoFilter filterTodo={this.filterTodo} />
              <TodoList
                todos={this.state.todos_display}
                toggleCompleteTodo={this.toggleCompleteTodo} 
                deleteTodo={this.deleteTodo} 
                />
              <TodoForm addTodo={this.addTodo} />
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

}

export default App;
