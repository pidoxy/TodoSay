export const user = (userData) => ({
    type: 'USER',
    payload: userData
});

export const decrement = () => ({
    type: 'DECREMENT',
});