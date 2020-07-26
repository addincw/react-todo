import React, { Component } from 'react';
import { TodoContext } from '../context/TodoContext'; 
import PropTypes from 'prop-types';

class TodoItem extends Component {
    static contextType = TodoContext;
    
    onChange = () => {
        const [ todos, todosDisplay, addTodo, deleteTodo, filterTodo, toggleCompleteTodo ] = this.context;
        toggleCompleteTodo(this.props.todo.id)
    }
    onClick = () => {
        const [ todos, todosDisplay, addTodo, deleteTodo, filterTodo, toggleCompleteTodo ] = this.context;
        deleteTodo(this.props.todo.id)
    }
    
    render() {
      const { todo } = this.props

      return (
        <div className="field mb-5" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                <input 
                    type="checkbox"
                    defaultChecked={todo.is_complete}
                    disabled={todo.is_disable}
                    onChange={this.onChange}
                    />
                <div className="pl-3">
                    <p className={todo.is_complete ? 'label line-trought' : ''}>{todo.name}</p>
                </div>
            </label>
            <button className="button is-small is-white" onClick={this.onClick} style={{display: todo.is_disable ? 'none' : 'block'}}>
                <span className="icon is-small has-text-danger">
                    <i className="fas fa-trash"></i>
                </span>
            </button>
        </div>
      );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
