import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext'; 

import TodoItem from './TodoItem';

function TodoList() {
  let [todos, setTodos, todosFilter] = useContext(TodoContext);

  todos = todosFilter.length > 0 ? todosFilter : todos

  if(todos.length === 0) {
    todos = [
        {
            id: 0,
            name: 'nothing to do',
            is_complete: false,
            is_disable: true
        }
    ]
  }

  return (
    <div className="card mb-3">
        <div className="card-content" style={{marginBottom: '-1.5rem'}}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    </div>
  );
}

export default TodoList;
