import React, { Component, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext();
export class TodoProvider extends Component {
    state = {
        todos: [],
        todos_display: []
    }

    // componentDidMount() {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    //       .then(response => response.json())
    //       .then(todos => {
    //         let newTodos = []

    //         todos.forEach(todo => {
    //           newTodos.push({
    //             id: todo.id,
    //             name: todo.title,
    //             is_complete: todo.completed,
    //             is_disable: false
    //           })    
    //         })
    
    //         this.setState({ 
    //           todos: [...this.state.todos, ...newTodos], 
    //           todos_display: [...this.state.todos, ...newTodos] 
    //         })
    //       })
    // }

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
        return(
            <TodoContext.Provider value={[
                this.state.todos,
                this.state.todos_display,
                this.addTodo,
                this.deleteTodo,
                this.filterTodo,
                this.toggleCompleteTodo
            ]}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}
