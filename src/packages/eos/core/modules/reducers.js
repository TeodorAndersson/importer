let INITIAL_PERCENT = localStorage.getItem('percent');
if(INITIAL_PERCENT === null){
    INITIAL_PERCENT = 0;
    localStorage.setItem('percent', INITIAL_PERCENT)
}

const actions = (state = {percent: INITIAL_PERCENT}, action) => {
    let oldValue = parseInt(state.percent);
    switch (action.type) {
        case 'REACHED_MAX':
            return { ...state, error: 'Max reached'};
        case 'REACHED_MIN':
            return { ...state, error: 'Min reached'};
        case 'INCREMENT':
            localStorage.setItem('percent', oldValue + 15);
            return {percent: oldValue + 15};
        case 'DECREMENT':
            localStorage.setItem('percent', oldValue - 15);
            return {percent: oldValue - 15};
        case 'RESET':
            localStorage.setItem('percent', '0');
            return {percent: 0};
        default:
            return state
    }
};

export default actions