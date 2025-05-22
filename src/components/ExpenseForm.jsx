// src/components/ExpenseForm.jsx
import React, { useState } from "react";
import "../styles/ExpenseForm.css";

function ExpenseForm({ onAddExpense }) {
  // Local form state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState({}); // object to store field errors

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newError = {};
    if (!title) newError.title = "Title is required";
    if (!amount) newError.amount = "Amount is required";
    if (!date) newError.date = "Date is required";
    if (!category) newError.category = "Category is required";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    // Build new expense object
    const expenseData = {
      id: Date.now(), // unique ID
      title,
      amount,
      date, // ISO 8601 format from input type=date
      category,
    };

    // Pass up to parent
    onAddExpense(expenseData);

    // Reset form
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setError({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title && <span className="error">{error.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          className="amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error.amount && <span className="error">{error.amount}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          className="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {error.date && <span className="error">{error.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="grocery">Grocery</option>
          <option value="transportation">Transportation</option>
          <option value="clothing">Clothing</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        {error.category && <span className="error">{error.category}</span>}
      </div>

      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
