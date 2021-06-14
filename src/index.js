import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './index.scss';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 10 }))
store.dispatch(addExpense({ description: "Gas bill", amount: 44 }))
store.dispatch(addExpense({ description: "Rent", createdAt: 235000 }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
