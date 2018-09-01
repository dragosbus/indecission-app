import uuid from 'uuid';
import db from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
};
//REMOVE_EXPENSE
export const removeExpense = id => ({
    type: 'REMOVE_EXPENSE',
    id: id
});
//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};

export const addExpenseMiddle = (expenseData = {}) => dispatch => {
    const {
        description = '',
            note = '',
            amount = 0,
            createdAt = 0
    } = expenseData;
    const expense = {
        description,
        note,
        amount,
        createdAt
    };
    db.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }))
    })
}

export const removeExpenseMiddle = id => dispatch => {
    db.ref(`expenses/${id}`).remove().then(res=>{
        dispatch(removeExpense(id));
    });
};