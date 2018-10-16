export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const reset = () => ({
    type: 'RESET'
});


export const incrementRequested = () => ({
    type: 'INCREMENT_REQUESTED'
});

export const decrementRequested = () => ({
    type: 'DECREMENT_REQUESTED'
});

export const resetRequested = () => ({
    type: 'RESET_REQUESTED'
});

export const reachedMax = () => ({
    type: 'REACHED_MAX'
});

export const reachedMin = () => ({
    type: 'REACHED_MIN'
});