import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { addExpenseMiddle } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = props => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpenseMiddle(expense));
          props.history.push('/')
        }}
      />
    </div>
  );
};


export default connect()(AddExpensePage);
