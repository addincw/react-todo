import { v4 as uuid } from 'uuid';

const initialState = {
    filter_name_todo: '',
    filter_complete_todo: false,
    todos: []
}
const todos = (state = initialState, action) => {
    let todos;

    switch (action.type) {
        case 'FILTER_COMPLETE_TODO':
            return { ...state, filter_complete_todo: !state.filter_complete_todo }
        case 'FILTER_NAME_TODO':
            return { ...state, filter_name_todo: action.payload }
        case 'ADD_TODO':
            todos = [...state.todos, {
                id: uuid(),
                name: action.payload,
                is_complete: false,
                is_disable: false
            }]

            return { ...state, todos }
        case 'DELETE_TODO':
            todos = [...state.todos.filter(todo => {
                if (todo.id !== action.payload) return todo
            })];

            return { ...state, todos }
        case 'COMPLETE_TODO':
            todos = [...state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.is_complete = !todo.is_complete
                }

                return todo
            })]

            return { ...state, todos }
        default:
            return state;
    }
}

export default todos;