import React, { Component } from 'react';
import { TodoContext } from '../context/TodoContext';

import TodoItem from './TodoItem';

class TodoList extends Component {
  static contextType = TodoContext;

  render() {
    return (
      <TodoContext.Consumer>
        {context => (
          <div className="card mb-3">
            <div className="card-content" style={{ marginBottom: '-1.5rem' }}>
              {context.todosDisplay.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        )}
      </TodoContext.Consumer>
    );
  }
}

export default TodoList;
