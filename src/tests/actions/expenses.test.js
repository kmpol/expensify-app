import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'testUid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = []
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => { done() })
})

test('Should setup remove expense action', () => {
    const action = removeExpense({ id: '123321' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123321'
    })
})

test('Should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })

        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('Should update expense action', () => {
    const updatedExpense = editExpense('1234', { note: 'updated' })
    expect(updatedExpense).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: {
            note: 'updated'
        }
    })
})

test('Should update/edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseToUpdate = expenses[1]
    const updates = {
        description: 'Rent updated!'
    }
    store.dispatch(startEditExpense(expenseToUpdate.id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenseToUpdate.id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${expenseToUpdate.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe('Rent updated!')
        done()
    })
})

test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test('Should add expense to database and store it', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'desc1',
        amount: 100,
        note: "Note one",
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
    })
})

test('Should add expense with defaults to database and store it', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDataDefault = {
        description: '', note: '', amount: 0, createdAt: 0
    }

    store.dispatch(startAddExpense(expenseDataDefault)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDataDefault
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            ...expenseDataDefault
        })
        done()
    })
})

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

