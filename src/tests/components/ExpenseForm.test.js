import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json'
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import 'react-dates/initialize';

configure({ adapter: new Adapter() });

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test("Should render error for invalid form subission", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note textare change', () => {
    const value = 'New expense note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Should set amount with valid data', () => {
    const value = '123.12'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe(value)
})

test('Should not set amount with invalid data', () => {
    const value = '123.12213'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe('')
})

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmitJD={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('Should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true })
    expect(wrapper.state('calendarFocused')).toBe(true)
})