import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { TodoContext } from '../context/TodoContext';

function TodoForm() {
    const [todos, setTodos] = useContext(TodoContext);
    const [name, setName] = useState('');

    const onChange = (e) => setName(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault()

        setTodos([...todos, {
            id: uuid(),
            name,
            is_complete: false,
            is_disable: false
        }])
  
        setName('')
    }

    return (
      <div className="card">
          <div className="card-content">
              <form onSubmit={onSubmit}>
                  <div className="field">
                      <div className="control has-icons-left">
                          <input
                              className="input"
                              type="text"
                              name="name"
                              placeholder="What do you need to do?"
                              value={name}
                              onChange={onChange}
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

export default TodoForm;
