import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            none,
            amount,
            createdAt
        }
    }
};
//REMOVE_EXPENSE
export const removeExpense = ({
    id
} = {}) => {
    return {
        type: 'REMOVE_EXPENSE'
    }
};
//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};