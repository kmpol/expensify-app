import expenses from '../fixtures/expenses'
import expensesTotal from '../../selectors/expenses-total'

test('Should return 0 if no expenses', () => {
    const sum = expensesTotal([])
    expect(sum).toBe(0)
})

test('Should correctly add up a single expense', () => {
    const sum = expensesTotal([expenses[0]])
    expect(sum).toBe(expenses[0].amount)
})

test('Should correctly add up multiple expenses', () => {
    const sum = expensesTotal(expenses)
    expect(sum).toBe(sum)
})