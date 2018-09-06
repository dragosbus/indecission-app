import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboardPage = (props) => (
  <div>
    <h1>{`Welcome ${props.displayName}`}</h1>
    <ExpensesList/>
    <ExpenseListFilters/>
  </div>
);
