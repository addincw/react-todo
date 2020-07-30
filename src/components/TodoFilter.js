import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterCompleteTodo, filterNameTodo } from '../store/actions/todos';

class TodoFilter extends Component {
    state = {
        filter_title: '',
        filter_is_complete: false
    }

    onChange = async (e) => {
        if (e.target.name === 'filter_is_complete') {
            await this.setState({ filter_is_complete: !this.state.filter_is_complete })
            this.props.filterCompleteTodo()
        } else {
            const filterName = e.target.value
            await this.setState({ [e.target.name]: filterName })
            this.props.filterNameTodo(filterName)
        }
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

export default connect(null, { filterCompleteTodo, filterNameTodo })(TodoFilter);
