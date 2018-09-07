import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/userReducer';
import userAuth from '../reducers/userAuth';
import db from '../firebase/firebase';

const initialData = {
    expenses: []
};
db.ref('expenses').once('value', snapshot => {
    snapshot.forEach(expense => {
        if (!initialData.expenses.includes(expense)) {
            initialData.expenses.push({
                id: expense.key,
                ...expense.val()
            });
        }
    });
});

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        user: userReducer,
        userAuth: userAuth
    }), initialData, applyMiddleware(thunk)
);

export default store;