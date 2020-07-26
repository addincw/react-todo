import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends Component {
    // static defaultProps = {
    //     todos: [
    //         {
    //             id: 0,
    //             name: 'nothing to do',
    //             is_complete: false,
    //             is_disable: true
    //         }
    //     ]
    // }

    render() {
      const { todos, deleteTodo, toggleCompleteTodo } = this.props

      return (
        <div className="card mb-3">
            <div className="card-content" style={{marginBottom: '-1.5rem'}}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleCompleteTodo={toggleCompleteTodo}
                        deleteTodo={deleteTodo}
                        />
                ))}
            </div>
        </div>
      );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
