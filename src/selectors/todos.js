export default (todos, {text, sortBy, startDate ,endDate })=>{
    return todos.filter((todo)=>{
        const textMatch = todo.note.toLowerCase().includes(text.toLowerCase()); 
        // const sortByMatch = true; 
        const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate ;

        //if any of these doesn't match nothing will display 
        return  startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}
