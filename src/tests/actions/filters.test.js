import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

test('should generate set text action object with provided value', () => {
    const action = setTextFilter("test123")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'test123'
    })
})

test('should generate set text action object with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
})

test('Should generate sorting by amount object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test('Should generate sorting by date object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})