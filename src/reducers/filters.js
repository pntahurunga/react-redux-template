//set filter reducer 
const defaultFilter = {
    text : '', 
    sortBy : 'createAt', 
    startDate : undefined,
    endDate : undefined
}

export default ((state = defaultFilter, action)=>{
    //TEXT_FILTER
    //START_DATE_FILTER
    //END_DATE_FILTER
    //SORT_BY_DATE
    switch (action.type) {
        case 'TEXT_FILTER':
            return{
                ...state,
                text: action.text
            }
        case 'START_DATE_FILTER':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'END_DATE_FILTER':
            return{
                ...state,
                endDate: action.endDate
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };      
    
        default:
            break;
    }

    return state
})
