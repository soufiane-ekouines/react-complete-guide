import React, { useState } from "react";
import ExpenseChart from "./components/Expense/ExpenseChart";
import Expenses from "./components/Expense/Expenses";
import Newexpense from "./components/Newexpense/Newexpense";

const data_expens = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
function App() {
  const [expenses, setexpenses] = useState(data_expens);
  const AddExpeseHandler = (expens) => {
    setexpenses(prevexpens => {
      return [expens, ...prevexpens];
    });
    console.log(expenses);
  }


  return (
    <div>
      <Newexpense onAddExpense={AddExpeseHandler} />
      <Expenses expens={expenses} />
    </div>

  );
}

export default App;
