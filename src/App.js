import React, { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SummaryReport from './components/SummaryReport';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Load budget and expenses from LocalStorage
  useEffect(() => {
    const savedBudget = localStorage.getItem('budget');
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

    if (savedBudget) setBudget(Number(savedBudget));
    setExpenses(savedExpenses);
  }, []);

  // Save budget and expenses to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('budget', budget);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [budget, expenses]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSetBudget = (value) => {
    setBudget(value);
  };

  return (
    <div className="app">
      <h1>Vacation Budget Planner</h1>
      <BudgetForm setBudget={handleSetBudget} budget={budget} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <SummaryReport budget={budget} expenses={expenses} />
    </div>
  );
};

export default App;
