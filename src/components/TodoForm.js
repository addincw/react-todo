import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../store/actions/todos';

class TodoForm extends Component {
    state = {
        name: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.name)
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

export default connect(null, { addTodo })(TodoForm);
