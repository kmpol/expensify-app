import React from 'react'
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses'
import selectedExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export class ExpensesSummary extends React.Component {

    render() {
        const grammarExpenseDisplay = this.props.expenseCount === 1 ? "expense" : "expenses"
        return (
            <div>
                <p>Viewing {this.props.expenseCount} {grammarExpenseDisplay} with total: ${numeral(this.props.expensesInTotal / 100).format('0.00')}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesInTotal: selectedExpensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary)