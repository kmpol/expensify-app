import React from 'react'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

configure({ adapter: new Adapter() });

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate} />)
})

test('Should render ExpenseListFilters correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', () => {
    wrapper.setProps({ filters: altFilters })
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})