import {
    createStore
} from 'redux';


//Action generators
//functions that return action objects
const incrementCount = ({incrementBy = 1}) => {
    return {
        type: "INCREMENT",
        incrementBy
    }
};

const decrementCount = ({decrementBy = 1}) =>{
    return {
        type: 'DECREMENT',
        decrementBy
    }
};

const resetCount = () => {
    return {
        type: 'RESET'
    }
};

const setCount = ({count}) => {
    return {
        type: 'SET',
        count
    }
}

//Reducers
    //1.Are pure functions
    //2.Never chnage state or action
const countreducer = (state = {count: 0}, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            return {
                count: action.count
            }
        default:
            return state;
    }

}

const store = createStore(countreducer);

const unsubscibe = store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch(incrementCount({
    incrementBy: 5
}));

store.dispatch(incrementCount({
    incrementBy: 5
}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(setCount({count: 101}));