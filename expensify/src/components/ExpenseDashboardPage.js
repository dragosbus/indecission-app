import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboardPage = () => (
  <div>
    <ExpensesList/>
    <ExpenseListFilters/>
  </div>
);
