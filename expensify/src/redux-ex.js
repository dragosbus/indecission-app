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

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter(()=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description has the text variable string inside of it


        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
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
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};
//SET_TEXT_FILTER
const setTextFilter = (text='') => {
    return {
        type:'SET_TEXT_FILTER',
        text
    }
}
//SORT_BY_DATE
const sortByDate = () =>{
    return {
        type: 'SORT_BY_DATE'
    }
};
//SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
};
//SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type:'SET_START_DATE',
        startDate
    }
};
//SET_END_DATE
const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
};

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
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
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

store.dispatch(editExpense(expense1.expense.id, {amount:500}));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setTextFilter('rent'))

store.dispatch(setStartDate(125));