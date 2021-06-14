import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action', () => {
    const action = removeExpense({ id: '123321' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123321'
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

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: "Rent",
        amount: 235000,
        createdAt: 1000,
        note: 'This was 3rd payment'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})