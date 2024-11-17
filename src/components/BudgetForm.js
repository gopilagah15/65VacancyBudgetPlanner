import React, { useState } from 'react';

const BudgetForm = ({ setBudget, budget }) => {
  const [input, setInput] = useState(budget || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(Number(input));
    alert(`Budget set to $${input}`);
  };

  return (
    <div className="budget-form">
      <h2>Set Your Budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your budget"
          required
        />
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
};

export default BudgetForm;
