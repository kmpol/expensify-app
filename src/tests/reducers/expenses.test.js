import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])

})

test('Should not remove expense if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-123'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)

})

test('Should add an expense', () => {

    const createdAt = moment(123)
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: '123',
            description: "test1",
            note: "",
            amount: "69",
            createdAt
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, {
        id: '123',
        description: "test1",
        note: "",
        amount: "69",
        createdAt
    }])
})

test('Should edit an expense', () => {

    const amount = 99999999
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state[1].amount).toBe(amount)
})

test('Should not edit an expense if not exist', () => {

    const createdAt = moment(123)
    const action = {
        type: "EDIT_EXPENSE",
        id: '-1',
        updates: {
            description: "testUpdated",
            note: "test",
            amount: "69",
            createdAt
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})