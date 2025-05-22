// src/components/ExpenseList.jsx
import React from "react";
import ExpenseTableRow from "./ExpenseTableRow";
import "../styles/ExpenseList.css";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseTableRow
            key={expense.id}
            expense={expense}
            onDeleteExpense={onDeleteExpense}
            onEditExpense={onEditExpense}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;
