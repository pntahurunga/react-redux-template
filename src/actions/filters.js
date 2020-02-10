//filter action
//TEXT_FILTER
export const setTextFilter = ((text)=>({
    type : 'TEXT_FILTER', 
    text
}))

//START_DATE_FILTER
export const setStartDate = ((startDate)=>({
    type : 'START_DATE_FILTER', 
    startDate

}))

//END_DATE_FILTER
export const setEndDate = ((endDate)=>({
    type : 'END_DATE_FILTER', 
    endDate

}))


// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE' 
});
