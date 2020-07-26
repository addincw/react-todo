import React, { Component } from 'react';
import { TodoContext } from '../context/TodoContext';

class TodoFilter extends Component {
    static contextType = TodoContext;

    state = {
        filter_title: '',
        filter_is_complete: false
    }

    onChange = async (e) => {
        const [ todos, todosDisplay, addTodo, deleteTodo, filterTodo, toggleCompleteTodo ] = this.context;

        if(e.target.name === 'filter_is_complete') {
            await this.setState({ filter_is_complete: !this.state.filter_is_complete })
        }else {
            await this.setState({ [e.target.name]: e.target.value })
        }

        filterTodo(this.state)
    }

    render() {
      return (
        <div className="card mb-3">
            <div className="card-content">
                <div className="field">
                    <div className="control has-icons-left">
                        <input 
                            className="input"
                            type="text"
                            name="filter_title"
                            placeholder="Search Todos"
                            value={this.state.filter_title}
                            onChange={this.onChange}
                            />
                        <span className="icon is-left">
                        <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="checkbox">
                        <input
                            className="mr-2"
                            type="checkbox"
                            name="filter_is_complete"
                            value="true"
                            onChange={this.onChange} 
                            checked={this.state.filter_is_complete}
                            />
                        Show completed todos
                    </label>
                </div>
            </div>
        </div>
      );
    }
}

export default TodoFilter;
