import React from 'react'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

configure({ adapter: new Adapter() });

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[2]} />)
})

test('Should render Edit Expense Page', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should edit expense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmitJD')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Should remove expense correctly', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
})