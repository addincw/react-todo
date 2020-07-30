import React, { Component } from 'react';
import { TodoContext } from '../context/TodoContext';

class TodoForm extends Component {
    static contextType = TodoContext;

    state = {
        name: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        const { addTodo } = this.context;

        e.preventDefault()
        addTodo(this.state.name)
        this.setState({ name: '' })
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.onSubmit}>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    placeholder="What do you need to do?"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                <span className="icon is-left">
                                    <i className="fas fa-clipboard-list"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <button className="button is-link is-fullwidth">
                                Add Todo
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoForm;
