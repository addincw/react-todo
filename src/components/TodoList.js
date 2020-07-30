import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="card-content" style={{ marginBottom: '-1.5rem' }}>
                    {this.props.todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { filter_name_todo, filter_complete_todo, todos } = state.todos

    if (todos.length && (filter_name_todo !== '' || filter_complete_todo)) {
        todos = todos.filter(todo => {
            if (!filter_complete_todo) {
                return todo.name.includes(filter_name_todo)
            }

            return todo.is_complete === filter_complete_todo && todo.name.includes(filter_name_todo)
        })
    }

    if (todos.length <= 0) {
        todos = [
            {
                id: 0,
                name: 'nothing to do',
                is_complete: false,
                is_disable: true
            }
        ]
    }

    return { todos };
};

export default connect(mapStateToProps)(TodoList);
