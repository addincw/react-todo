import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoFilter() {
    const { todos, setTodosFilter } = useContext(TodoContext);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterIsComplete, setFilterIsComplete] = useState(false);

    const onChange = async (e) => {
        if(e.target.name === 'filter_is_complete') {
            setFilterIsComplete(!filterIsComplete)
        }else {
            setFilterTitle(e.target.value)
        }

        setTodosFilter(
            todos.filter(todo => {
                if(!filterIsComplete) {
                    return todo.name.includes(filterTitle)
                }
        
                return todo.is_complete === filterIsComplete && todo.name.includes(filterTitle)
            })
        )
    }

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
                          value={filterTitle}
                          onChange={onChange}
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
                          onChange={onChange} 
                          checked={filterIsComplete}
                          />
                      Show completed todos
                  </label>
              </div>
          </div>
      </div>
    );
}

export default TodoFilter;
