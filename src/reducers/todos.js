//set the todo reducer 
const defaultTodoState= []
export default ((state = defaultTodoState, action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        case 'REMOVE_TODO':
            return state.filter(todo => {
                if(todo.id !== action.id) return todo  
            })
        default:
            break;
    }

    return state
})



