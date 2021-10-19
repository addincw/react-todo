import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoItem(props) {
    const { todos, setTodos } = useContext(TodoContext);
    const { todo } = props
    
    const onChange = () => {
        const { id } = props.todo
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.is_complete = !todo.is_complete
            }

            return todo
        }))
    }
    const onClick = () => {
        const { id } = props.todo
        setTodos(todos.filter(todo =>  (todo.id !== id) ? todo : null))
    }
    
    return (
      <div className="field mb-5" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
              <input 
                  type="checkbox"
                  defaultChecked={todo.is_complete}
                  disabled={todo.is_disable}
                  onChange={onChange}
                  />
              <div className="pl-3">
                  <p className={todo.is_complete ? 'label line-trought' : ''}>{todo.name}</p>
              </div>
          </label>
          <button className="button is-small is-white" onClick={onClick} style={{display: todo.is_disable ? 'none' : 'block'}}>
              <span className="icon is-small has-text-danger">
                  <i className="fas fa-trash"></i>
              </span>
          </button>
      </div>
    );
}

export default TodoItem;
