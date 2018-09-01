import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }), applyMiddleware(thunk)
);

export default store;