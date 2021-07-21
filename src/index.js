import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startAddExpense, startSetExpenses } from './actions/expenses';
import './index.scss';
import './firebase/firebase'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading</p>, document.getElementById('root'))
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'))
})
