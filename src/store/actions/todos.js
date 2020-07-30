export const filterNameTodo = (name) => {
    return {
        type: 'FILTER_NAME_TODO',
        payload: name
    }
}
export const filterCompleteTodo = () => {
    return {
        type: 'FILTER_COMPLETE_TODO'
    }
}
export const addTodo = (name) => {
    return {
        type: 'ADD_TODO',
        payload: name
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}
export const completeTodo = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload: id
    }
}