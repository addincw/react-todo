import React, { useState, createContext } from 'react';

export const TodoContext = createContext();
export function TodoProvider(props) {
    const [todos, setTodos] = useState([])
    const [todosFilter, setTodosFilter] = useState([])

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

    return(
        <TodoContext.Provider value={[todos, setTodos, todosFilter, setTodosFilter]}>
            {props.children}
        </TodoContext.Provider>
    )
}
