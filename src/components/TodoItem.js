import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { completeTodo, deleteTodo } from '../store/actions/todos';

class TodoItem extends Component {
    state = { is_complete: this.props.todo.is_complete }

    handleCompleteTodo = () => {
        this.setState({ is_complete: !this.state.is_complete })
        this.props.completeTodo(this.props.todo.id)
    }
    handleDeleteTodo = () => {
        this.props.deleteTodo(this.props.todo.id)
    }

    render() {
        const { todo } = this.props

        return (
            <div className="field mb-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="checkbox" style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        defaultChecked={this.state.is_complete}
                        disabled={todo.is_disable}
                        onChange={this.handleCompleteTodo}
                    />
                    <div className="pl-3">
                        <p className={todo.is_complete ? 'label line-trought' : ''}>{todo.name}</p>
                    </div>
                </label>
                <button
                    className="button is-small is-white"
                    style={{ display: todo.is_disable ? 'none' : 'block' }}
                    onClick={this.handleDeleteTodo}>
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

export default connect(null, { completeTodo, deleteTodo })(TodoItem);
