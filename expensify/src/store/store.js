import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/userReducer';
import db, {firebase} from '../firebase/firebase';

const initialData = {
    expenses: []
};

firebase.auth().onAuthStateChanged(user=> {
    db.ref(`expenses/${user.uid}`).once('value', snapshot => {
        snapshot.forEach(expense => {
            if (!initialData.expenses.includes(expense)) {
                initialData.expenses.push({
                    id: expense.key,
                    ...expense.val()
                });
            }
        });
    });
});

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        user: userReducer
    }), initialData, applyMiddleware(thunk)
);

export default store;