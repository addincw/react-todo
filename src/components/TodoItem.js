import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
      const { todo, deleteTodo, toggleCompleteTodo } = this.props

      return (
        <div className="field mb-5" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                <input 
                    type="checkbox"
                    defaultChecked={todo.is_complete}
                    disabled={todo.is_disable}
                    onChange={toggleCompleteTodo.bind(this, todo.id)}
                    />
                <div className="pl-3">
                    <p className={todo.is_complete ? 'label line-trought' : ''}>{todo.name}</p>
                </div>
            </label>
            <button className="button is-small is-white" onClick={deleteTodo.bind(this, todo.id)}>
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
