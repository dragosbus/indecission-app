import React from 'react';
import { connect } from 'react-redux';
import { addExpenseMiddle } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = props => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpenseMiddle(expense, props.user.id));
          props.history.push('/')
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps)(AddExpensePage);
