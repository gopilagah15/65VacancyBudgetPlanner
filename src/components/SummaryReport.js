import React from 'react';

const SummaryReport = ({ budget, expenses }) => {
  const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalSpent;

  return (
    <div className="summary-report">
      <h2>Budget Summary</h2>
      <p>Total Budget: ${budget}</p>
      <p>Total Spent: ${totalSpent}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
      {remainingBudget < 0 && <p style={{ color: 'red' }}>You have exceeded your budget!</p>}
    </div>
  );
};

export default SummaryReport;
