import React, { Component } from 'react';
import { TodoContext } from '../context/TodoContext'; 

import TodoItem from './TodoItem';

class TodoList extends Component {
    static contextType = TodoContext;

    render() {         
      let [ todos, todosDisplay ]  = this.context;

      if(todosDisplay.length === 0) {
        todosDisplay = [
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
                {todosDisplay.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
      );
    }
}

export default TodoList;
