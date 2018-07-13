import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'ffff',
        description: 'January Rent',
        note: 'This is was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};