// src/components/ExpenseFilter.jsx
import React from "react";
import "../styles/ExpenseFilter.css";

function ExpenseFilter({ onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="month-filter">Filter by month:</label>
      <select id="month-filter" className="month-select" onChange={handleChange}>
        <option value="all">All</option>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
