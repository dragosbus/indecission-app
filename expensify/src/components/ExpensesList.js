import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpensesList = props => (
  <div>
    <h2>Expense List</h2>
    {props.expenses.map(expense => (
      <ExpenseItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesList);
