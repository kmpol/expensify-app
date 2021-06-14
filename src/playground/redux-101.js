import React from 'react';
import ReactDOM from 'react-dom';
import '../index.scss';
import { createStore } from 'redux'

const incrementBy = ({ by = 1 } = {}) => ({
    type: "INCREMENT",
    by
})

const decrementBy = ({ by = 1 } = {}) => ({
    type: "DECREMENT",
    by
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.by
            };
        case "DECREMENT":
            return {
                count: state.count - action.by
            };
        default:
            return state;
    }
}
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementBy({ by: 10 }))

store.dispatch(decrementBy())
store.dispatch(decrementBy({ by: 5 }))
store.dispatch(decrementBy())

ReactDOM.render(<div></div>, document.getElementById('root'));

// {/* <AppRouter /> */}