// src/components/ExpenseTableRow.jsx
import React, { useState } from "react";
import "../styles/ExpenseTableRow.css";

function ExpenseTableRow({ expense, onDeleteExpense, onEditExpense }) {
  // Local state to track editing
  const [isEditing, setIsEditing] = useState(false);

  // Temp states for editing fields
  const [editTitle, setEditTitle] = useState(expense.title);
  const [editAmount, setEditAmount] = useState(expense.amount);
  const [editDate, setEditDate] = useState(expense.date);
  const [editCategory, setEditCategory] = useState(expense.category);

  const handleDelete = () => {
    onDeleteExpense(expense.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedExpense = {
      ...expense,
      title: editTitle,
      amount: editAmount,
      date: editDate,
      category: editCategory,
    };
    onEditExpense(updatedExpense);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(expense.title);
    setEditAmount(expense.amount);
    setEditDate(expense.date);
    setEditCategory(expense.category);
    setIsEditing(false);
  };

  return (
    <tr className="expense-row">
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        ) : (
          expense.title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
          />
        ) : (
          expense.amount
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />
        ) : (
          expense.date
        )}
      </td>
      <td>
        {isEditing ? (
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          >
            <option value="housing">Housing</option>
            <option value="utilities">Utilities</option>
            <option value="grocery">Grocery</option>
            <option value="transportation">Transportation</option>
            <option value="clothing">Clothing</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        ) : (
          expense.category
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default ExpenseTableRow;
