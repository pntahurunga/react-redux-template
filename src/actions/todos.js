import uuid from 'react-uuid'

//todo actions constructors
// ADD_TODO
export const addTodo = ({note, isCompleted, createdAt })=>({
    type : 'ADD_TODO',
    todo : {
        id : uuid(), 
        note,
        isCompleted, 
        createdAt
    }     
})


// REMOVE_TODO
export  const removeTodo = ({id}={})=>({
    type : 'REMOVE_TODO',
    id
})
