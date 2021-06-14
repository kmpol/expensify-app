import React from 'react'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

configure({ adapter: new Adapter() });

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('Should render AddExpensePage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmitJD')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})

// polityki mdma - Kamil 