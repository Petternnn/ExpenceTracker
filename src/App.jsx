// src/App.jsx
import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import "./styles/App.css"; // Root-level styling

function App() {
  // State to store expenses (array of objects)
  const [expenses, setExpenses] = useState([]);

  // Load stored expenses on first render
  useEffect(() => {
    const storedData = localStorage.getItem("expenses");
    if (storedData) {
      setExpenses(JSON.parse(storedData));
    }
  }, []);

  // Update localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add new expense
  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  // Delete existing expense
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit existing expense
  const handleEditExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((item) => (item.id === updatedExpense.id ? updatedExpense : item))
    );
  };

  // Filter logic (pass this to filter component)
  const [filteredMonth, setFilteredMonth] = useState("all");
  const handleFilterChange = (monthValue) => {
    setFilteredMonth(monthValue);
  };

  // Filter expenses by month if "filteredMonth" is not "all"
  const filteredExpenses =
    filteredMonth === "all"
      ? expenses
      : expenses.filter((item) => {
          const expenseMonth = new Date(item.date).getMonth(); // 0 - 11
          return expenseMonth === parseInt(filteredMonth, 10);
        });

  // Calculate total expenses
  const totalExpense = filteredExpenses.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content-area">
        <div className="left-column">
          {/* Form to add expenses */}
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-column">
          {/* Filter component is ADDED here, above the total */}
          <ExpenseFilter onFilterChange={handleFilterChange} />
          <h2 className="total-text">Total: {totalExpense.toFixed(2)} NOK</h2>
          {/* List of expenses */}
          <ExpenseList
            expenses={filteredExpenses}
            onDeleteExpense={handleDeleteExpense}
            onEditExpense={handleEditExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
