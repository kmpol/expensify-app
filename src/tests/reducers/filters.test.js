import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const state = filtersReducer({
        sortBy: 'amount'
    }, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testing' })
    expect(state.text).toBe('testing')
})

test('Should set startDate', () => {
    const startDate = moment(1)
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDate })
    expect(state.startDate).toBe(startDate)
})

test('Should set endDate', () => {
    const endDate = moment(123)
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endDate })
    expect(state.endDate).toBe(endDate)
})