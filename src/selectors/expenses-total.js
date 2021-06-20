// expenses = array of objects
// expenses -> map -> array of numbers
// array of numbers -> reduce -> sum of these numbers
// return 0 if no expenses provided
export default (expenses) => {
    if (expenses.length) {
        return expenses.map((expense) => expense.amount)
            .reduce((sum, current) => sum + current, 0)

    } else return 0
}