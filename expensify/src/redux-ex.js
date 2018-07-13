import {
    createStore,
    combineReducers
} from 'redux';
import uuid from 'uuid';

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

//ADD_EXPENSE
const addExpense = ({
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
const removeExpense = ({id} = {}) =>{
    return {
        type: 'REMOVE_EXPENSE'
    }
};
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> {
                return id !== action.id;
            })
        default: return state
    }

};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefine
}
//Filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {
        default: return state
    }
};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({description: 'rent', amount: 100}));

const expense2 = store.dispatch(addExpense({description:'Coffe', amount: 200}));

store.dispatch(removeExpense({id: expense1.expense.id}))

console.log(expense1);